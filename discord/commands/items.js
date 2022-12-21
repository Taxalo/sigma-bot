const axios = require("axios");

module.exports = {
    name: 'items',
    description: 'items',
    usage: 'items',
    async execute() {
        try {
            await axios.get('http://localhost:5959/items');
        } catch (e) {
            console.log(e);
        }

    }
};