const { bot: { prefix, token } } = require("./config");

const { Client } = require('discord.js');
const client = new Client();

client.login(token);

module.exports = client;

require("./Handlers/Command");
require("./Handlers/Event");
