const botConfig = require("../config/botConfig");
const farm = require("./onPhyisicTickEvents/farm");

module.exports = onPhysicTick = async () => {
    await farm(botConfig.bot);
}