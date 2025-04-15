const { exec } = require('child_process');
const fs = require('fs');

module.exports = (client) => {
    // Comando .downloader
    client.on('message', async (message) => {
        const { body, from } = message;

        // Verifica si el mensaje comienza con .downloader
        if (body.startsWith('.downloader ')) {
            const url = body.replace('.downloader ', '').trim();
            if (!url) {
                client.sendMessage(from, 'Por favor, proporciona un enlace para descargar.');
                return;
            }

            client.sendMessage(from, 'Iniciando descarga...');

            // Ejecuta el comando de descarga en el servidor
            exec(`wget -O downloaded_file.apk "${url}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`);
                    client.sendMessage(from, 'Hubo un error al intentar descargar el archivo.');
                    return;
                }

                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    client.sendMessage(from, 'Hubo un error en el proceso de descarga.');
                    return;
                }

                console.log(`stdout: ${stdout}`);
                
                // Verifica si el archivo se descargó correctamente
                if (fs.existsSync('downloaded_file.apk')) {
                    client.sendMessage(from, 'Archivo descargado correctamente, enviando...');
                    
                    // Envía el archivo al usuario
                    client.sendMessage(from, fs.readFileSync('downloaded_file.apk'), {
                        filename: 'spotify.apk',
                        mimetype: 'application/vnd.android.package-archive'
                    }).then(() => {
                        console.log('Archivo enviado con éxito.');
                        fs.unlinkSync('downloaded_file.apk'); // Elimina el archivo después de enviarlo
                    }).catch((err) => {
                        console.error('Error al enviar el archivo: ', err);
                        client.sendMessage(from, 'Hubo un error al intentar enviar el archivo.');
                    });
                } else {
                    client.sendMessage(from, 'No se encontró el archivo descargado.');
                }
            });
        }
    });
};
