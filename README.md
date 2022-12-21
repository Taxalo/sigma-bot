# Sigma Bot, hecho en NodeJS
## Bot hecho para factions, con posibilidad de farmear hachas, espadas y desarmado.
### Librerías:
    mineflayer: 4.3.0
    discord.js: 13.6.0
    express: 4.18.1
    ...

Si se usan proxies deberán ser __**SOCKS5**__ En caso contrario modificar las lineas 15-33 en `/client/index.js`

### Funcionalidades:
* Es capaz de comunicarse con Discord
  * Ejecutar comandos remotamente
  * Activar o desactivar el farmeo remoteamente.
  * Tepear a usuarios.
* Auto equiparse armadura
* Obtener los usuarios online
* Auto reiniciarse cuando el servidor se reinicia
* Detecta los mensajes de registro y logeo.
* Es capaz de entrar automáticamente a Factions (Tweaks necesarios dependiendo del servidor, modificar en : `/client/events/onChatEvents/tryJoinFactions`)
* Alerta de usuarios cercanos.
* Minado automático.