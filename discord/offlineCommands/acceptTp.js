const {channelId} = require("../auth.json");
const {MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    name: 'acceptTp',
    async execute({tpText, client}) {
        const channel = await client.channels.fetch(channelId);
        if (!channel) return console.log("Not found");

        const channelEmbed = new MessageEmbed({
            color: "#eeeeee",
            author: {
                name: "NUEVO TP",
                iconURL: client.user.avatarURL()
            },
            description: `${tpText}`,
        });

        const buttonRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('acceptTp')
                    .setLabel(`Aceptar TP`)
                    .setEmoji('✅')
                    .setStyle('PRIMARY'),
            );

        await channel.send({embeds: [channelEmbed], components: [buttonRow]});
    }
};