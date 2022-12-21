const axios = require("axios");
module.exports = tpToDiscord = async (message) => {
    if (message.includes("teletransportarse")) {
        try {
            await axios.post('http://localhost:6969/tp/accept', {
                tpText: message
            });
        } catch (e) {
            console.log(e);
        }
    }
}