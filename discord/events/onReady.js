const consoleLogged = require('./readyEvents/consoleLogged');
const setActivity = require('./readyEvents/setActivity');

module.exports = onReady = async (client) => {
    await consoleLogged(client);
    await setActivity(client);
}

