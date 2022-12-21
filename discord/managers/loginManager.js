const discordAuth = require("../auth.json");
module.exports = loginManager = async (client) => {
    client.login(discordAuth.token)
}