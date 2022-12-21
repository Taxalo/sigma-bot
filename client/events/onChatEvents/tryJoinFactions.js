const {password} = require("../../config/botConfig");
const timer = require("../../globalFunctions/timer");
module.exports = tryJoinFactions = async (username, message, bot) => {
    if (message.includes("Registrate")) {
        await timer(1500);
        bot.chat(`/register ${password} ${password}`)

    } else if (message.includes("Inicia")) {

        await timer(1500);
        bot.chat(`/login ${password}`)

    } else if (message.includes("Conectado a")) {

        await timer(2500);

        bot.setQuickBarSlot(0);
        bot.activateItem();

        await timer(1000);

        await bot.clickWindow(15, 0, 0); // 😘❤️️
    }
}