const {
    Client,
    Intents
} = require("discord.js");

const express = require('express')
const app = express()
app.use(express.json());

const port = 6969

const acceptTp = require("./offlineCommands/acceptTp");
const sendError = require("./offlineCommands/sendError");
const sendAlert = require("./offlineCommands/sendAlert");
const sendItems = require("./offlineCommands/sendItems");
const sendPlayers = require("./offlineCommands/sendPlayers");

let errors = [];

const {
    readdirSync
} = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});

readdirSync("./managers").forEach((f) => {
    require(`./managers/${f}`)(client);
});

app.post('/tp/accept', async (req, res) => {
    res.status(200).send({
        success: true
    });
    await acceptTp.execute({tpText: req.body.tpText, client: client});
})

app.post("/error", async (req, res) => {

    const {moment, errorText} = req.body;
    if (errors.includes(errorText)) return;
    errors.push(errorText);
    setTimeout(() => {
        errors = errors.filter(err => err !== errorText);
    }, 2000);
    res.status(200).send({
        success: true
    });
    await sendError.execute({moment, errorText, client});
});

app.post("/items", async (req, res) => {
    const items = req.body.items;
    res.status(200).send({
        success: true
    });
    await sendItems.execute({items, client});
});

app.post("/alert", async (req, res) => {
    const {alertType, alertText} = req.body;
    res.status(200).send({
        success: true
    });
    await sendAlert.execute({alertType, alertText, client})
});

app.post("/players", async (req, res) => {
    const {players} = req.body;

    res.status(200).send({
        success: true
    });

    await sendPlayers.execute({players, client});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});