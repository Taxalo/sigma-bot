const axios = require("axios");

module.exports = {
    name: 'players',
    description: 'players',
    usage: 'players',
    async execute() {
        try {
            await axios.get('http://localhost:5959/players');
        } catch (e) {
            console.log(e);
        }

    }
};