const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'armor',
    description: 'armor',
    usage: 'armor',
    async execute(message) {
        try {
            await axios.post('http://localhost:5959/armor');

            message.channel.send({
                embeds: [new MessageEmbed({
                    color: "#ffc174",
                    author: {
                        name: "Equipando la mejor armadura posible.",
                        iconURL: message.client.user.avatarURL()
                    },
                    description: `Si el bot tiene una armadura, equipará la mejor.`,
                })]
            });
        } catch (e) {
            console.log(e);
        }

    }
};