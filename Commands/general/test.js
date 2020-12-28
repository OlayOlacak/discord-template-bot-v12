const Command = require("../../Base/Command");

module.exports = class extends Command {
  name = "test"
  aliases = ["testing"]
  description = "deneme"
  category = "general"
  owner = false

  async execute(client, args, message) {

    await message.reply("test commands");

  }
}
