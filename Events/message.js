const { some } = require("lodash");
const { bot: { prefix, token }, team: {developers} } = require("../config");
const client = require("../main");

module.exports = class {

    constructor(client) {
      this.client = client;

    }

    async execute(message) {


      if (message.author.bot) return;

      if (!message.content.startsWith(prefix)) return;
      const args = message.content.split(" ").slice(1);
      const commandName = message.content.split(" ")[0].slice(prefix.length);

      const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases.includes(commandName))
      if (!command) return;

      if (command.owner && !developers.includes(message.author.id)) return message.reply("Error : Command run owner");
      if (!message.member.hasPermission(command.permissions)) return message.reply("Error : Command run missing permission!");

      try {
          command.execute(client, args, message);
      } catch (err) {
          return console.log("ERROR : " + err);
      }

    }
}
