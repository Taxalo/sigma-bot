const axios = require("axios");

module.exports = getItems = async (bot) => {
    const items = bot.inventory.items().map(i => {
        return `${i.displayName} x${i.count} (${i.enchants.map(e => {
            return `${e.name}: ${e.lvl}`
        }).join(" | ")})`
    });

    await axios.post('http://localhost:6969/items', {
        items
    });
}