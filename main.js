const Bot = require("./Base/Client");
const { bot: { prefix, token } } = require("./config");
const fs = require("fs");

const client = new Bot();

client.login(token);

const categories = fs.readdirSync("./Commands/");

categories.forEach((category) => {
  fs.watch(`./commands/${category}/`, { encoding: 'UTF-8' }, (eventType, name) => {
      if (eventType ==="change") {

        delete require.cache[require.resolve(`./commands/${category}/${name}`)];
        client.commands.delete(name);

        const Command = require(`./commands/${category}/${name}`);
        let command = new Command();

        client.commands.set(command.name, command)
      }
  });
});


module.exports = client;

require("./Handlers/Command");
require("./Handlers/Event");
