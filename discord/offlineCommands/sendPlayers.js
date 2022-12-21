const {channelId} = require("../auth.json");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'sendPlayers',
    async execute({players, client}) {
        const channel = await client.channels.fetch(channelId);
        if (!channel) return console.log("Not found");

        const channelEmbed = new MessageEmbed({
            color: "#eeeeee",
            author: {
                name: "Server players",
                iconURL: client.user.avatarURL()
            },
            description: "```\n" + players.join(", ") + "\n```",
        });
        await channel.send({embeds: [channelEmbed]});
    }
};