const onSpawn = require("../events/onSpawn");
const onChat = require("../events/onChat");
const onMessageStr = require("../events/onMessageStr");
const onPhyisicTick = require("../events/onPhysicTick");
const onEntitySpawn = require("../events/onEntitySpawn");
const botConfig = require("../config/botConfig");
module.exports = {
    eventManager: (bot) => {
        // Fix temporal
        botConfig.bot = bot;

        bot.once("spawn", onSpawn);
        bot.on('chat', onChat);
        bot.on("messagestr", onMessageStr);
        bot.on("physicTick", onPhyisicTick);
        bot.on("entitySpawn", onEntitySpawn);3

        bot.on("error", () =>  {
            process.exit();
        });

        bot.on("kicked", () => {
            process.exit();
        });

    }
}