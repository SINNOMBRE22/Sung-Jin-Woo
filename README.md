---
 <P align="center">
<img src="https://giffiles.alphacoders.com/152/15268.gif" width="230" height="230"/>
</p>
<br>
---

#  Sung Jin-Woo <img src="https://img.shields.io/badge/Version-2.0.0-blue" alt="Versión"> <img src="https://img.shields.io/badge/Licencia-MIT-green" alt="Licencia">

*"Despierta. Ha llegado tu momento." - Sistema de Cazadores*

---

## 📌 Tabla de Contenidos
- [🌟 Características Principales](#caracteristicas-principales)
- [⚙️ Requisitos del Sistema](#requisitos-del-sistema)
- [🚀 Instalación](#instalacion)
  - [Termux (Android)](#termux-android)
  - [VPS (Ubuntu)](#vps-ubuntu)
- [🔧 Mantenimiento](#mantenimiento)
- [📚 Guía de Comandos](#guia-de-comandos)
- [🌍 Contribución](#contribucion)
- [⚠️ Advertencias](#advertencias)
- [📞 Soporte](#soporte)

---

## <a id="caracteristicas-principales"></a>🌟 Características Principales

| Categoría           | Funcionalidades                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| 🤖 Automatización   | Gestión inteligente de grupos, auto-respuestas, bienvenidas personalizadas      |
| 🛡️ Moderación      | Anti-spam, filtro de enlaces, control de usuarios                                |
| 🎨 Multimedia       | Descargas de YouTube/Spotify, editores de imagen, stickers animados              |
| ⚡ Utilidades       | Búsqueda de anime, pronóstico del tiempo, generador de QR                        |
| 🌐 Multiplataforma  | Soporte para WhatsApp Normal y Business                                          |
| 🔄 Auto-Update      | Sistema de actualización automática con notificaciones                         |

---

## <a id="requisitos-del-sistema"></a>⚙️ Requisitos del Sistema

- **Sistema Operativo**: 
  - Ubuntu 20.04+ (Recomendado para VPS)
  - Termux (Android 8.0+)
- **Dependencias**:
  - Node.js v22.6.0
  - Git
  - FFmpeg
  - ImageMagick
- **Memoria RAM**: Mínimo 1GB (Recomendado 2GB)

---
## <a id="instalacion"></a>🚀 Instalación

# *<a id="instalar node.js"></a>Actualizar Node.js*


```bash
> apt install nodejs
```
```
> node -v #verificamos la versión de node
```
```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
```
> source ~/.nvm/nvm.sh
```
```
> nvm --version
```
```
> nvm ls-remote
```
```
> nvm install 22.6.0   #Version a instalar
```

# *<a id="termux-android"></a>Termux (Android)*
```bash
termux-setup-storage
```
```bash
pkg update -y && pkg upgrade -y
```
```bash
pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/SINNOMBRE22/Sung-Jin-Woo
```
```bash
cd Sung-Jin-Woo
```
```bash
apt install yarn
```
```bash
npm install
```
```bash
npm start
```
```bash
npm start
```
# *<a id="vps-ubuntu"></a>VPS (Ubuntu)*
```bash
sudo apt update && sudo apt full-upgrade -y
```
```bash
sudo apt install -y git nodejs ffmpeg imagemagick
```
```bash
git clone https://github.com/SINNOMBRE22/Sung-Jin-Woo
```
```bash
cd Sung-Jin-Woo
```
```bash
apt install yarn
```
```bash
npm install
```
```bash
npm start
```

# *Iniciar El bot en PM2 :*#
```bash 

> pm2 start index.js --name "bot"

```
*Visualizar proceso en PM2 :*

```bash 

> pm2 monit
[ ! ] Para salir del monitor usa la combinación de CTRL + c
```

*Eliminar PM2 para el bot :*

```bash

> pm2 kill
```
---

<a id="mantenimiento"></a>🔧 Mantenimiento

(Reporta cualquier falla al creador via WhatsApp)


---

<a id="guia-de-comandos"></a>📚 Guía de Comandos

Ejecuta .menu en WhatsApp para ver el panel interactivo de comandos.
📥 Documentación Completa de Comandos


---

<a id="contribucion"></a>🌍 Contribución

Envia tus ideas al creador
[![Enviar WhatsApp](https://img.shields.io/badge/Enviar%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/message/BSE4ZCEPY7ZOP1)



---

<a id="advertencias"></a>⚠️ Advertencias

❗ Importante:

Usa siempre un número secundario.

No modifiques los archivos de sesión manualmente.

El mal uso puede llevar a baneos temporales de WhatsApp.

Mantén tu servidor/VPS actualizado.

Si el bot no responde, espamea con (.ds) o (.dsowner).



---

<a id="soporte"></a> [![📞 Soporte](https://img.shields.io/badge/%20Soporte-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/message/BSE4ZCEPY7ZOP1)



---

<img src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-success" alt="Estado"> <img src="https://img.shields.io/github/last-commit/SINNOMBRE22/Sung-Jinwoo-Bot" alt="Último Commit">

> "El débil no tiene derecho a elegir cómo morir." - Sistema de Cazadores



---
