module.exports = interactionHandler = async (interaction) => {
    if (!interaction.isButton()) return;
    if (interaction.message.author.id !== interaction.client.user.id) return;

    const command = interaction.client.interactions.get(interaction.customId) || interaction.client.interactions.find(cmd => cmd.interaction && cmd.interaction.some(e => e === interaction.customId));

    if (!command) return console.log();

    try {
        command.execute(interaction);
    } catch (error) {
        console.log(error);
    }
}