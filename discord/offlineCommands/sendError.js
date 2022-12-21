const {errorChannelId} = require("../auth.json");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'sendError',
    async execute({moment, errorText, client}) {
        const channel = await client.channels.fetch(errorChannelId);
        if (!channel) return console.log("Not found");

        const channelEmbed = new MessageEmbed({
            color: "#ff0000",
            author: {
                name: `ERROR ${moment}`,
                iconURL: client.user.avatarURL()
            },
            description: errorText,
        });


        await channel.send({embeds: [channelEmbed]});
    }
};