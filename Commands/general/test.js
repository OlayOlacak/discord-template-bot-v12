const Command = require("../../Base/Command");

module.exports = class extends Command {
  name = "test"
  aliases = ["testing"]
  description = "deneme"
  category = "general"
  owner = false

  execute(client, args, message) {

   message.reply("test")

  }
}