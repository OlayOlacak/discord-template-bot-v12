const Command = require("../../Base/Command");

module.exports = class extends Command {
  name = "reload"
  description = "deneme"
  owner = true

  execute(args, message) {

    message.channel.send("deneme");

  }
}
