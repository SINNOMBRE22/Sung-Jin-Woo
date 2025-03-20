let handler = async (m, { conn }) => {
global.db.data.users[m.sender].comandos += 1;
    let currentTime = new Date().getTime();
    let lastPlayTime = global.db.data.users[m.sender].lastRouletteTime || 0;
    let cooldownDuration = 2 * 60 * 2000; 
    
    if (currentTime - lastPlayTime < cooldownDuration) {
        let remainingTime = cooldownDuration - (currentTime - lastPlayTime);
        let remainingTimeString = msToTime(remainingTime);
        throw `*[ ⏲️ ] Debes esperar ${remainingTimeString} antes de jugar de nuevo.*`;
    }
    
    let chance = Math.random(); 
    
    if (chance < 0.3) { 
        global.db.data.users[m.sender].exp += 1000; 
        m.reply('*[ 🍀 ] Te has salvado. Ganas 1000 puntos de experiencia.*');
    } else {
        let losingMessages = [
            'te has disparado en la pierna 🦵🔫',
            'te has pegado un tiro en la nalga 🍑🔫',
            'te has pegado un tiro en la mano 👋🔫',
            'te has pegado un tiro en el asterisco 😣🔫',
            'te has pegado un tiro en la lonja 🐷🔫',
            'te has pegado un tiro en la oreja 👂🔫',
            'se te ha salido un tiro y le has pegado a tu ex 🧌🔫'
        ];
        
        let randomIndex = Math.floor(Math.random() * losingMessages.length);
        let losingMessage = losingMessages[randomIndex];
        
        global.db.data.users[m.sender].exp -= 10000; 
        m.reply(`*[ 💥 ] ${losingMessage}. Pierdes 1000 puntos de experiencia.*`);
    }
    
    global.db.data.users[m.sender].lastRouletteTime = currentTime;


}
handler.help = ['ruleta'];
handler.tags = ['game']
handler.command = ['ruleta', 'dispara'];
handler.group = true
handler.fail = null;
handler.exp = 0;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + " m y " + seconds + " s ";
}

export default handler;
