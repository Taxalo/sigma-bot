process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const socks = require('socks').SocksClient
const mineflayer = require('mineflayer');
const botConfig = require("./config/botConfig");

const armorManager = require("mineflayer-armor-manager");
const collectBlock = require('mineflayer-collectblock').plugin;

const HOST_NAME = "";
const bot = mineflayer.createBot({
    host: HOST_NAME,
    username: botConfig.name,
    version: botConfig.version,
    connect: async (client) => {
        await socks.createConnection({
            proxy: {
                host: "23.109.55.188",
                port: 9002,
                type: 5,
                userId: "aaLwKnD0FMMtF0LT",
                password: "wifi;es;;;"
            },
            command: 'connect',
            destination: {
                host: HOST_NAME,
                port: 25565
            }
        }, (err, info) => {
            if (err) {
                console.log("Error:" + err)
                return
            }
            client.setSocket(info.socket)
            client.emit('connect')
        })
    }
});

bot.loadPlugin(armorManager);
bot.loadPlugin(collectBlock);

require("./managers/eventManager").eventManager(bot);
require("./managers/serverManager").serverManager(bot);