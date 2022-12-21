const {alertChannelId} = require("../auth.json");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'sendError',
    async execute({alertType, alertText, client}) {
        const channel = await client.channels.fetch(alertChannelId);
        if (!channel) return console.log("Not found");

        const channelEmbed = new MessageEmbed({
            color: "#e0fff0",
            author: {
                name: `${alertType} Alert`,
                iconURL: client.user.avatarURL()
            },
            description: alertText,
        });


        await channel.send({embeds: [channelEmbed]});
    }
};