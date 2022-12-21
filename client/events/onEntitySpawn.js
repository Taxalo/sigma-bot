const alertDiscord = require("./onEntitySpawnEvents/alertDiscord");

module.exports = onEntitySpawn = async (entity) => {
    await alertDiscord(entity);
};