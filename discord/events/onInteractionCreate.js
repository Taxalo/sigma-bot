const interactionHandler = require('./interactionCreateEvents/interactionHandler');

module.exports = onInteractionCreate = async (interaction) => {
    await interactionHandler(interaction);
}