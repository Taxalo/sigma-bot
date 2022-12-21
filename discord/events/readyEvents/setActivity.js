module.exports = setActivity = async (client) => {
    await client.user.setActivity('0.0.0.0',{
        type: "LISTENING",
    });

    client.guilds.cache.forEach(g => {
        console.log(`${g.name} - ${g.memberCount} - ${g.available}`);
    })

    console.log(`Set Client Activity.`);
}