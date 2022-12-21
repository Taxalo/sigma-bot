const commandHandler = require('./messageCreateEvents/commandHandler');
module.exports = onMessage = async (message) => {
    await commandHandler(message);
}