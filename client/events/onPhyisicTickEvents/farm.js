const farmConfig = require("../../config/farmConfig");
const axios = require("axios");
const Item = require("prismarine-item")("1.8");

const mcmmo = "HACHAS";
const diamondSword = new Item(276, 1);
const diamondAxe = new Item(279, 1);
let errors = [];
module.exports = farm = async (bot) => {
        if (!farmConfig.enabled) return;
        try {
            const playerFilter = (entity) => entity.type === "mob" && entity.mobType === farmConfig.mobType && bot.entity.position.distanceTo(entity.position) < farmConfig.maxDistance;
            const playerEntity = bot.nearestEntity(playerFilter);
            if (!playerEntity) return;

            bot.updateHeldItem();

            switch (mcmmo) {
                case "DESARMADO":
                    if (bot.heldItem !== null) {
                        await bot.unequip("hand");
                    }
                    break;
                case "ESPADAS":
                    if (!bot.heldItem || bot.heldItem.type !== diamondSword.type) {
                        await bot.equip(diamondSword.type, "hand");
                    }
                    break;
                case "HACHAS":
                    if (!bot.heldItem || bot.heldItem.type !== diamondAxe.type) {
                        await bot.equip(diamondAxe.type, "hand")
                    }
                    break;
            }

            const entityPosition = playerEntity.position.offset(0, 1, 0);

            await bot.lookAt(entityPosition);
            await bot.attack(playerEntity);
        } catch (e) {
            farmConfig.enabled = false;
            console.log(e.message);

            if (!errors.includes(e.message)) {
                await axios.post('http://localhost:6969/error', {
                    moment: "farmeando",
                    errorText: e.message
                });
            }

            errors.push(e.message);
            setTimeout( () => {
                errors = errors.filter(err => err !== e.message);
            }, 2000);
        }
}