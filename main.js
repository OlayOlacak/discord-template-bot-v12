const Bot = require("./Base/Client");
const { bot: { prefix, token } } = require("./config");

const client = new Bot();

client.login(token);

module.exports = client;

require("./Handlers/Command");
require("./Handlers/CommandReload")(client);
require("./Handlers/Event");
