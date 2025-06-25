import axios from 'axios'
import fetch from 'node-fetch'

// 1. Cacheo del token de Spotify
let spotifyTokenCache = {
  token: null,
  expiresAt: 0
}

async function getSpotifyToken() {
  const now = Date.now()
  if (spotifyTokenCache.token && spotifyTokenCache.expiresAt > now) {
    return spotifyTokenCache.token
  }
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          'acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009'
        ).toString('base64')
    },
    data: 'grant_type=client_credentials'
  })
  const token = response.data.access_token
  // Se resta un margen de 60s para renovarlo antes de que expire
  spotifyTokenCache.token = token
  spotifyTokenCache.expiresAt = now + response.data.expires_in * 1000 - 60000
  return token
}

// 2. Obtención de un Buffer desde la URL
async function getBuffer(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error al obtener la imagen: ${res.statusText}`)
  return await res.buffer()
}

// 3. Formateo del mensaje de progreso
function formatExtractionMessage(objective, attempt, progress) {
  return `━━━━━━━━━━━━━━━━━━
⚔️ Extracción en Curso
🌟 Objetivo: ${objective}
🛠️ Intento: ${attempt}
💠 Progreso: ${progress}
━━━━━━━━━━━━━━━━━━`
}

// 4. Función de progreso optimizada con setInterval
async function progressWithSync(conn, m, msg, downloadPromise, { objective, attempt, failedTrack = null }) {
  let failureOccurred = false
  const animation = [
    '▱▱▱▱▱▱▱▱▱▱ 0%',
    '▰▱▱▱▱▱▱▱▱▱ 10%',
    '▰▰▱▱▱▱▱▱▱▱ 20%',
    '▰▰▰▱▱▱▱▱▱▱ 30%',
    '▰▰▰▰▱▱▱▱▱▱ 40%',
    '▰▰▰▰▰▱▱▱▱▱ 50%',
    '▰▰▰▰▰▰▱▱▱▱ 60%',
    '▰▰▰▰▰▰▰▱▱▱ 70%',
    '▰▰▰▰▰▰▰▰▱▱ 80%',
    '▰▰▰▰▰▰▰▰▰▱ 90%'
  ]
  let i = 0
  const interval = 300
  const progressInterval = setInterval(async () => {
    if (i < animation.length) {
      const formattedMessage = formatExtractionMessage(objective, attempt, animation[i])
      await conn.sendMessage(m.chat, { text: formattedMessage, edit: msg.key })
      i++
    }
  }, interval)

  try {
    await downloadPromise
  } catch (err) {
    failureOccurred = true
  }
  clearInterval(progressInterval)
  const finalMessage =
    failureOccurred && failedTrack
      ? `▰▰▰▰▰▰▰▰▰▰ 100% - Falló la extracción de: ${failedTrack}`
      : '▰▰▰▰▰▰▰▰▰▰ 100% - ¡Descargado!'
  const finalFormattedMessage = formatExtractionMessage(objective, attempt, finalMessage)
  await conn.sendMessage(m.chat, { text: finalFormattedMessage, edit: msg.key })
}

// 5. Reintentos de descarga
async function downloadWithRetries(track, conn, m, msg, objectiveText) {
  let data = null
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const fetchMusicPromise = fetch(
        `https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${track.url}`
      ).then(res => res.json())

      await progressWithSync(conn, m, msg, fetchMusicPromise, {
        objective: objectiveText,
        attempt,
        failedTrack: attempt === 3 ? track.name : null
      })

      data = await fetchMusicPromise
      if (!data || !data.music) {
        throw new Error(`No se pudo obtener el enlace de descarga para ${track.name}`)
      }
      return data
    } catch (err) {
      if (attempt === 3) return null
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  return null
}

// 6. Handler principal
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `⚔️ Error: No ingresaste ninguna búsqueda o enlace.

Ejemplo:
• ${usedPrefix + command} Bellyache
• ${usedPrefix + command} https://open.spotify.com/track/...
• ${usedPrefix + command} https://open.spotify.com/album/...
• ${usedPrefix + command} https://open.spotify.com/playlist/...
• ${usedPrefix + command} https://open.spotify.com/artist/...`

  try {
    await m.react('⏳')
    let isAlbum = false, isPlaylist = false, isArtist = false, dataToProcess

    // Detecta el tipo de enlace o búsqueda
    if (text.includes('open.spotify.com/album')) {
      isAlbum = true
      dataToProcess = await spotifyAlbum(text)
      if (!dataToProcess?.tracks?.length) throw '⚠️ No se encontraron canciones en el álbum.'
    } else if (text.includes('open.spotify.com/playlist')) {
      isPlaylist = true
      dataToProcess = await spotifyPlaylist(text)
      if (!dataToProcess?.tracks?.length) throw '⚠️ No se encontraron canciones en la playlist.'
    } else if (text.includes('open.spotify.com/artist') || text.includes('spotify.com/artist')) {
      isAlbum = true
      isArtist = true
      dataToProcess = await spotifyArtist(text)
      if (!dataToProcess?.tracks?.length) throw '⚠️ No se encontraron canciones para el artista.'
    } else if (text.includes('spotify.com/track')) {
      dataToProcess = { tracks: [ await spotifyTrack(text) ] }
    } else {
      // Búsqueda por nombre
      if (text.toLowerCase().includes('album')) {
        isAlbum = true
        dataToProcess = await spotifyAlbumSearch(text)
        if (!dataToProcess?.tracks?.length) throw '⚠️ No se encontraron canciones en el álbum.'
      } else {
        const trackInfo = await spotifyxv(text)
        if (!trackInfo.length || !trackInfo[0].url)
          throw '❌ *Error:* No se encontraron resultados.'
        dataToProcess = { tracks: [trackInfo[0]] }
      }
    }

    // 6.1 Procesamiento para Álbum/Playlist/Artista
    if (isAlbum || isPlaylist) {
      let failedTracks = []
      for (let i = 0; i < dataToProcess.tracks.length; i++) {
        const track = dataToProcess.tracks[i]
        const objectiveText = `${track.name} (${i + 1}/${dataToProcess.tracks.length})`

        const initAnim = formatExtractionMessage(objectiveText, 1, '▱▱▱▱▱▱▱▱▱▱ 0%')
        const animMsg = await conn.sendMessage(m.chat, { text: initAnim })

        const data = await downloadWithRetries(track, conn, m, animMsg, objectiveText)
        if (data) {
          await conn.sendMessage(m.chat, { delete: animMsg.key })
          await conn.sendMessage(m.chat, {
            audio: { url: data.music },
            fileName: `${data.title}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `${data.title}`,
                body: `Artista: ${data.artist}`,
                description: `Álbum: ${data.album}`,
                thumbnailUrl: data.thumbnail
              }
            }
          })
          await new Promise(resolve => setTimeout(resolve, 2000))
        } else {
          failedTracks.push(track)
        }
      }

      // Reintentos para los tracks fallidos
      if (failedTracks.length > 0) {
        let failedTitles = failedTracks.map(t => t.name).join('\n')
        await conn.sendMessage(m.chat, {
          text: `Igris intentará obtener de nuevo las sombras de:\n${failedTitles}`
        })

        let stillFailedTracks = []
        for (let track of failedTracks) {
          const objectiveText = `${track.name} (Reintento)`
          const initAnim = formatExtractionMessage(objectiveText, 1, '▱▱▱▱▱▱▱▱▱▱ 0%')
          const animMsg = await conn.sendMessage(m.chat, { text: initAnim })

          const data = await downloadWithRetries(track, conn, m, animMsg, objectiveText)
          if (data) {
            await conn.sendMessage(m.chat, { delete: animMsg.key })
            await conn.sendMessage(m.chat, {
              audio: { url: data.music },
              fileName: `${data.title}.mp3`,
              mimetype: 'audio/mpeg',
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: false,
                  title: `${data.title}`,
                  body: `Artista: ${data.artist}`,
                  description: `Álbum: ${data.album}`,
                  thumbnailUrl: data.thumbnail
                }
              }
            })
            await new Promise(resolve => setTimeout(resolve, 2000))
          } else {
            stillFailedTracks.push(track)
          }
        }
        if (stillFailedTracks.length > 0) {
          let stillFailedTitles = stillFailedTracks.map(t => t.name).join('\n')
          await conn.sendMessage(m.chat, {
            text: `No se pudieron extraer las siguientes sombras:\n${stillFailedTitles}`
          })
        }
      }

    // 6.2 Procesamiento para canción individual
    } else {
      const track = dataToProcess.tracks[0]
      const objectiveText = `${track.name} (1/1)`
      const initAnim = formatExtractionMessage(objectiveText, 1, '▱▱▱▱▱▱▱▱▱▱ 0%')
      const animMsg = await conn.sendMessage(m.chat, { text: initAnim })

      const data = await downloadWithRetries(track, conn, m, animMsg, objectiveText)
      if (!data) {
        await conn.sendMessage(m.chat, {
          text: `Igris intentará obtener de nuevo las sombras de:\n${track.name}`
        })
        const initAnimRetry = formatExtractionMessage(objectiveText + ' (Reintento)', 1, '▱▱▱▱▱▱▱▱▱▱ 0%')
        const animMsgRetry = await conn.sendMessage(m.chat, { text: initAnimRetry })

        const dataRetry = await downloadWithRetries(track, conn, m, animMsgRetry, objectiveText + ' (Reintento)')
        if (!dataRetry) {
          await conn.sendMessage(m.chat, {
            text: `No se pudo extraer la sombra de: ${track.name}`
          })
        } else {
          await conn.sendMessage(m.chat, { delete: animMsgRetry.key })
          await conn.sendMessage(m.chat, {
            audio: { url: dataRetry.music },
            fileName: `${dataRetry.title}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `${dataRetry.title}`,
                body: `Artista: ${dataRetry.artist}`,
                description: `Álbum: ${dataRetry.album}`,
                thumbnailUrl: dataRetry.thumbnail
              }
            }
          })
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      } else {
        await conn.sendMessage(m.chat, { delete: animMsg.key })
        await conn.sendMessage(m.chat, {
          audio: { url: data.music },
          fileName: `${data.title}.mp3`,
          mimetype: 'audio/mpeg',
          contextInfo: {
            externalAdReply: {
              showAdAttribution: false,
              title: `${data.title}`,
              body: `Artista: ${data.artist}`,
              description: `Álbum: ${data.album}`,
              thumbnailUrl: data.thumbnail
            }
          }
        })
        await m.react('✅')
      }
    }
  } catch (e1) {
    await m.react('❌')
    await m.reply(`❌ *Error:* ${e1.message || e1}`)
    console.error(e1)
  }
}

handler.help = ['spotify', 'music']
handler.tags = ['downloader']
handler.command = ['spotify', 'music']
handler.group = false
export default handler

// 7. Funciones auxiliares para Spotify

async function spotifyxv(query) {
  const token = await getSpotifyToken()
  try {
    let response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
      headers: { Authorization: `Bearer ${token}` }
    })
    const tracks = response.data.tracks.items
    return tracks.map(track => ({
      name: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: track.album.name,
      duration: timestamp(track.duration_ms),
      url: track.external_urls.spotify,
      thumbnail: track.album.images[0]?.url || ''
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}

async function spotifyAlbum(url) {
  let albumId
  try {
    const parts = url.split('/')
    albumId = parts[parts.indexOf('album') + 1].split('?')[0]
  } catch (e) {
    throw new Error('No se pudo extraer el ID del álbum.')
  }
  const token = await getSpotifyToken()
  let response = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/albums/${albumId}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const albumData = response.data
  const tracks = albumData.tracks.items.map(t => ({
    name: t.name,
    artist: t.artists.map(a => a.name).join(', '),
    album: albumData.name,
    url: t.external_urls.spotify,
    thumbnail: albumData.images[0]?.url || ''
  }))
  return { album: albumData, tracks }
}

async function spotifyAlbumSearch(query) {
  const token = await getSpotifyToken()
  let response = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const albums = response.data.albums.items
  if (!albums.length) return null

  const albumId = albums[0].id
  let albumResponse = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/albums/${albumId}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const albumData = albumResponse.data
  const tracks = albumData.tracks.items.map(t => ({
    name: t.name,
    artist: t.artists.map(a => a.name).join(', '),
    album: albumData.name,
    url: t.external_urls.spotify,
    thumbnail: albumData.images[0]?.url || ''
  }))
  return { album: albumData, tracks }
}

async function spotifyPlaylist(url) {
  let playlistId
  try {
    const parts = url.split('/')
    playlistId = parts[parts.indexOf('playlist') + 1].split('?')[0]
  } catch (e) {
    throw new Error('No se pudo extraer el ID de la playlist.')
  }
  const token = await getSpotifyToken()
  let response = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${playlistId}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const playlistData = response.data
  const tracks = playlistData.tracks.items.map(item => {
    const track = item.track
    return {
      name: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: playlistData.name,
      url: track.external_urls.spotify,
      thumbnail: track.album.images[0]?.url || ''
    }
  })
  return { album: { name: playlistData.name }, tracks }
}

async function spotifyArtist(url) {
  let artistId
  try {
    const parts = url.split('/')
    artistId = parts[parts.indexOf('artist') + 1].split('?')[0]
  } catch (e) {
    throw new Error('No se pudo extraer el ID del artista.')
  }
  const token = await getSpotifyToken()
  let response = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const artistData = response.data
  const tracks = artistData.tracks.map(t => ({
    name: t.name,
    artist: t.artists.map(a => a.name).join(', '),
    album: 'Top Tracks',
    url: t.external_urls.spotify,
    thumbnail: t.album.images[0]?.url || ''
  }))
  return { album: { name: 'Top Tracks' }, tracks }
}

async function spotifyTrack(url) {
  let trackId
  try {
    const parts = url.split('/')
    trackId = parts[parts.indexOf('track') + 1].split('?')[0]
  } catch (e) {
    throw new Error('No se pudo extraer el ID del track.')
  }
  const token = await getSpotifyToken()
  let response = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/tracks/${trackId}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  const track = response.data
  return {
    name: track.name,
    artist: track.artists.map(a => a.name).join(', '),
    album: track.album.name,
    url: track.external_urls.spotify,
    thumbnail: track.album.images[0]?.url || ''
  }
}

function timestamp(ms) {
  const min = Math.floor(ms / 60000)
  const sec = Math.floor((ms % 60000) / 1000)
  return `${min}:${sec < 10 ? '0' : ''}${sec}`
}
