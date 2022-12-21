const Discord = require("discord.js");
const fs = require("fs");
module.exports = manageCollections = (client) => {
    client.cmds = new Discord.Collection();
    client.offlineCmds = new Discord.Collection();
    client.interactions = new Discord.Collection();
    fs.readdirSync('./commands').forEach(f => {
        const command = require(`../commands/${f}`);
        client.cmds.set(command.name, command);
    });
    fs.readdirSync('./interactions').forEach(f => {
        const interaction = require(`../interactions/${f}`);
        client.interactions.set(interaction.name, interaction);
    });

    fs.readdirSync('./offlineCommands').forEach(f => {
        const command2 = require(`../offlineCommands/${f}`);
        client.offlineCmds.set(command2.name, command2);
    });
}