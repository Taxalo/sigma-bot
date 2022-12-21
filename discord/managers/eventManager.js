const onReady = require("../events/onReady");
const onMessageCreate = require("../events/onMessageCreate");
const onInteractionCreate = require("../events/onInteractionCreate");
module.exports = eventManager = (client) => {
    client.on('ready', onReady);
    client.on("messageCreate", onMessageCreate);
    client.on("interactionCreate", onInteractionCreate);
}