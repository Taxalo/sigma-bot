const express = require('express')
const app = express()
app.use(express.json());
const port = 5959
const equipArmor = require("../botFunctions/equipArmor");
const getItems = require("../botFunctions/getItems");
const getPlayers = require("../botFunctions/getPlayers");
const sendCommand = require("../botFunctions/sendCommand")
const farmConfig = require("../config/farmConfig");
const mine = require("../botFunctions/mine");
const restart = require("../botFunctions/restart");
module.exports = {
    serverManager: (bot) => {
        app.post('/tp/accept', async (req, res) => {
            res.status(200).send({
                success: true
            });
            bot.chat("/tpaccept");
        });

        app.post("/farm", async (req, res) => {
            farmConfig.enabled = !farmConfig.enabled;

            res.status(200).send({
                enabled: farmConfig.enabled
            });
        });

        app.post("/armor", async (req, res) => {
            equipArmor(bot);
            res.status(200).send({
                success: true
            });
        });

        app.post("/command", async (req, res) => {
            sendCommand(bot, req.body.command);
            res.status(200).send({
                success: true
            });
        });

        app.get("/items", async (req, res) => {
            await getItems(bot);
            res.status(200).send({
                success: true
            });
        })

        app.get("/players", async (req, res) => {
            await getPlayers(bot);
            res.status(200).send({
                sucess: true
            });
        })

        app.post("/mine", async (req, res) => {
            await mine(bot);
            res.status(200).send({
                success: true
            });
        })

        app.post("/restart", async (req, res) => {
            await restart();
            res.status(200).send({
                sucess: true
            });
        })

        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    }
}
