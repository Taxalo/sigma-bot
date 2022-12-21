const botConfig = require("../config/botConfig");
const fixInventory = require("./onSpawnEvents/fixInventory");

module.exports = spawn = async () => {
    await fixInventory(botConfig.bot);
}