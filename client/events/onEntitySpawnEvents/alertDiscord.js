const botConfig = require("../../config/botConfig");
const sendBotAlert = require("../../globalFunctions/sendBotAlert");
const timer = require("../../globalFunctions/timer");
let seenPeople = [];
module.exports = alertDiscord = async (entity) => {
    if (entity.type !== "player" || entity.username === botConfig.name || entity.name.startsWith("§") || seenPeople.includes(entity.username)) return;
    if (!botConfig.bot.scoreboard["1"] || !botConfig.bot.scoreboard["1"].title || !botConfig.bot.scoreboard["1"].title.includes("§b§lFACTIONS 1.8")) return;

    await timer(2500);

    if (!botConfig.bot.scoreboard["1"] || !botConfig.bot.scoreboard["1"].title || !botConfig.bot.scoreboard["1"].title.includes("§b§lFACTIONS 1.8")) return;

    seenPeople.push(entity.username);

    setTimeout( () => {
        seenPeople.filter(e => e !== entity.username);
    }, 30 * 1000);

    await sendBotAlert(`**${entity.username}** ha aparecido cerca de _${botConfig.name}_. Está en las coords: \`${entity.position}\``, "Info")
}