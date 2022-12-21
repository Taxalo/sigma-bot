module.exports = sendCommand = (bot, command) => {
    bot.chat(`/${command}`);
}