const { readdirSync } = require("fs");
const Client = require("../main")

const categories = readdirSync("./Commands/");

categories.forEach(async (category) => {
  const commands = readdirSync(`./Commands/${category}`);
  commands.filter((cmd) => cmd.endsWith(".js")).forEach((cmd) => {
    const Command = require(`../Commands/${category}/${cmd}`);
    let command = new Command();

    Client.commands.set(command.name, command);
  });
});
