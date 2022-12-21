const logMessage = require("./onMessageStrEvents/logMessage");
const tpToDiscord = require("./onMessageStrEvents/tpToDiscord");

module.exports = spawn = async (message) => {
    await logMessage(message)
    await tpToDiscord(message);
}