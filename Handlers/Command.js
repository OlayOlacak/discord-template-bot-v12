const { readdirSync } = require("fs");

global.commands = new Map();

const folderName = readdirSync("./Commands/");
for (let folder of folderName) {

  const filesName = readdirSync("./Commands/" + folder);

  for (let fileName of filesName) {

    const Command = require(`../Commands/${folder}/${fileName}`);
    let command = new Command();
    command.category = folder;

    global.commands.set(command.name, command);
  }
}
