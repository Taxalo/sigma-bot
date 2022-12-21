const axios = require("axios");

module.exports = {
    name: 'mine',
    description: 'mine',
    usage: 'mine',
    async execute() {
        try {
            const mine = await axios.post('http://localhost:5959/mine');

            console.log(mine);

        } catch (e) {
            console.log(e);
        }

    }
};