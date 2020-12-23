const Command = require("../../Base/Command");

module.exports = class extends Command {
  name = "test"
  description = "deneme"
  permissions = ["ADMINISTRATOR"]
  owner = false

  execute(args, message) {

    message.channel.send("deneme");

  }
}