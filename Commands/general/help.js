const Command = require("../../Base/Command");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
  name = "help"
  description = "Help Command"
  permissions = []
  owner = false

  async execute(args, message) {
    let content = "";

    const Commands = global.commands;
    
    for (let command of Commands.values()) {
        content += "` " + command.name + " ` "
    };

    const helpEmbed = new MessageEmbed()
    .setTitle("Commands List")
    .setDescription(content)
    await message.channel.send(helpEmbed);

  }
}