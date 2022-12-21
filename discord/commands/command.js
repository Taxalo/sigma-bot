const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'command',
    description: 'comman',
    usage: 'command',
    async execute(message, args) {
        try {
            await axios.post('http://localhost:5959/command', {
                command: args.join(" ")
            });

            message.channel.send({
                embeds: [new MessageEmbed({
                    color: "#92fc69",
                    author: {
                        name: "Enviado comando.",
                        iconURL: message.client.user.avatarURL()
                    },
                    description: `El comando será enviado lo más pronto posible.`,
                })]
            });
        } catch (e) {
            console.log(e);
        }

    }
};