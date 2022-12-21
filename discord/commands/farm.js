const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'farm',
    description: 'farm',
    usage: 'farm',
    async execute(message) {
        try {
            const farm = await axios.post('http://localhost:5959/farm');

            if (farm.data.enabled) {
                message.channel.send({
                    embeds: [new MessageEmbed({
                        color: "#32ff00",
                        author: {
                            name: "AutoFarm activado",
                            iconURL: message.client.user.avatarURL()
                        },
                        description: `El AutoFarm ha sido activado.`,
                    })]
                });
            } else {
                message.channel.send({
                    embeds: [new MessageEmbed({
                        color: "#ff0000",
                        author: {
                            name: "AutoFarm desactivado",
                            iconURL: message.client.user.avatarURL()
                        },
                        description: `El AutoFarm ha sido desactivado.`,
                    })]
                })
            }
        } catch (e) {
            console.log(e);
        }

    }
};