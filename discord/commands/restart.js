const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'restart',
    description: 'restart',
    usage: 'restart',
    async execute(message) {
        try {
            await axios.post('http://localhost:5959/restart');

            message.channel.send({
                embeds: [new MessageEmbed({
                    color: "#74ff80",
                    author: {
                        name: "Reiniciando el bot.",
                        iconURL: message.client.user.avatarURL()
                    },
                    description: `El bot debería estar en factions en 10 segundos.`,
                })]
            });
        } catch (e) {
            console.log(e);
        }

    }
};