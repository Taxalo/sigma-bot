const axios = require("axios");
module.exports = sendBotAlert = async (alertText, alertType) => {
    try {
        await axios.post('http://localhost:6969/alert', {
            alertText, alertType
        });
    } catch (e) {
        console.log(e);
    }
}