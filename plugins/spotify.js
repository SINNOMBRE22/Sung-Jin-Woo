import axios from 'axios'
import fetch from 'node-fetch'
import search from 'yt-search'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Usage: ${usedPrefix + command} <search query>`;

  // Realiza búsqueda en Spotify
  const spotifyResponse = await fetch(`${apis}/search/spotify?q=${encodeURIComponent(text)}`);
  const songData = await spotifyResponse.json();
  if (!songData.data || songData.data.length === 0) throw '⚠️ No results found for that query.';
  
  const track = songData.data[0];
  let spotifyMessage = `
Title: ${track.title}
Artist: ${track.artist}
Album: ${track.album}
Duration: ${track.duration}
Link: ${track.url}
  `;
  
  await conn.sendMessage(m.chat, {
    text: spotifyMessage,
    contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        containsAutoReply: true,
        renderLargerThumbnail: true,
        title: track.title,
        body: 'Spotify Downloader',
        mediaType: 1,
        thumbnailUrl: track.image,
        mediaUrl: track.url,
        sourceUrl: track.url
      }
    }
  }, { quoted: m });
  
  m.react('⌛️');

  // Primer intento de descarga vía api.siputzx.my.id
  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${track.url}`);
    const data = await res.json();
    await conn.sendMessage(m.chat, {
      audio: { url: data.data.download },
      fileName: `${track.title}.mp3`,
      mimetype: 'audio/mpeg'
    }, { quoted: m });
    m.react('✅️');
  } catch {
    // Segundo intento vía api/spotifydl
    try {
      const res = await fetch(`${apis}/download/spotifydl?url=${track.url}`);
      const data = await res.json();
      await conn.sendMessage(m.chat, {
        audio: { url: data.data.url },
        fileName: `${track.title}.mp3`,
        mimetype: 'audio/mpeg'
      }, { quoted: m });
      m.react('✅️');
    } catch {
      // Tercer intento usando spotifyxv
      try {
        let songInfo = await spotifyxv(text);
        if (!songInfo.length) throw '❌ No results found, please try again.';
        const res = await fetch(`https://archive-ui.tanakadomp.biz.id/download/spotify?url=${track.url}`);
        const data = await res.json();
        await conn.sendMessage(m.chat, {
          audio: { url: data.result.data.download },
          fileName: `${data.result.data.title}.mp3`,
          mimetype: 'audio/mpeg'
        }, { quoted: m });
        m.react('✅️');
      } catch (e) {
        m.react('❌');
        console.error(e);
      }
    }
  }
}

handler.command = ['music'];
export default handler;

async function spotifyxv(query) {
  let token = await tokens();
  try {
    let response = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const tracks = response.data.tracks.items;
    const results = tracks.map((track) => ({
      name: track.name,
      artist: track.artists.map((artist) => artist.name).join(', '),
      album: track.album.name,
      duration: timestamp(track.duration_ms),
      url: track.external_urls.spotify,
      image: track.album.images.length ? track.album.images[0].url : '',
    }));
    return results;
  } catch (error) {
    console.error(`Error in spotifyxv: ${error}`);
    return [];
  }
}

async function tokens() {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009').toString('base64'),
      },
      data: 'grant_type=client_credentials',
    });
    return response.data.access_token;
  } catch (error) {
    console.error(`Error in tokens: ${error}`);
    throw new Error('Could not obtain access token');
  }
}

function timestamp(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
