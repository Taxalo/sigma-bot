const axios = require("axios");
module.exports = getPlayers = async (bot) => {
    let players = [];
    for (let player of Object.keys(bot.players)) {
        players.push(player);
    }

    await axios.post('http://localhost:6969/players', {
        players
    });
}