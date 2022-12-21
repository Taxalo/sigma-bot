const mine = async (bot) => {
    console.log("mining")
    const netherBlock = bot.findBlock({
        matching: 87,
        maxDistance: 6
    });

    if (!netherBlock) return;

    try {
        await bot.collectBlock.collect(netherBlock);
        await mine(bot);
    } catch (e) {
        console.log(e);
    }
}

module.exports = mine;

