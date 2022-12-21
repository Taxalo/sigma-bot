const botConfig = require("../config/botConfig");
const tryJoinFactions = require("./onChatEvents/tryJoinFactions");

module.exports = spawn = async (username, message) => {
    if (username && username === botConfig.bot.username) return;

    await tryJoinFactions(username, message, botConfig.bot);

}