const {prefix} = require("../../auth.json");

module.exports = commandHandler = async (message) => {
    if (!message.guild) return;


    let args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || (message.author.bot) || (message.content.indexOf(prefix) !== 0)) return;

    const command = message.client.cmds.get(commandName) || message.client.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;


    try {
        command.execute(message, args);

        console.log(`Member ${message.author.tag} used command ${prefix}${commandName} in ${message.guild.name}.`);
    } catch (error) {
        console.error(error);
    }
}