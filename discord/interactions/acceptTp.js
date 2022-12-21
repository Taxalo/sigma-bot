const {MessageEmbed} = require("discord.js");
const axios = require("axios");
module.exports = {
    name: 'acceptTp',
    interaction: ['acceptTp'],
    description: 'acceptTp',
    async execute(interaction) {
        const tpText = interaction.message.embeds[0].description;
        const channelEmbed = new MessageEmbed({
            color: "#38ff00",
            author: {
                name: "TP aceptado",
                iconURL: interaction.client.user.avatarURL()
            },
            description: `${tpText}`,
        });
        try {
            await axios.post('http://localhost:5959/tp/accept');

        } catch (e) {
            console.log(e);
        }

        interaction.update({embeds:[channelEmbed], components: []});

    }
};
