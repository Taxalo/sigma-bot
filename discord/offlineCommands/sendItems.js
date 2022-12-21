const {channelId} = require("../auth.json");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'sendItems',
    async execute({items, client}) {
        const channel = await client.channels.fetch(channelId);
        if (!channel) return console.log("Not found");

        const channelEmbed = new MessageEmbed({
            color: "#eeeeee",
            author: {
                name: "BOT Items",
                iconURL: client.user.avatarURL()
            },
            description: `${items.join("\n")}`,
        });
        await channel.send({embeds: [channelEmbed]});
    }
};