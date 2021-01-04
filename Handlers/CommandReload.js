const path = require("path");
const fs = require("fs");

module.exports = (client) => {

    const categories = fs.readdirSync(path.join(__dirname, "../Commands/"));

    categories.forEach((category) => {
        fs.watch(path.join(__dirname, `../Commands/${category}/`), { encoding: 'UTF-8' }, (eventType, name) => {
            if (eventType === "change") {

                try {
                    delete require.cache[require.resolve(`../Commands/${category}/${name}`)];
                    client.commands.delete(name);

                    const Command = require(`../Commands/${category}/${name}`);
                    let command = new Command();

                    client.commands.set(command.name, command);
                } catch (err) {
                    console.log("Command Error " + err);
                }
            }
        });
    });
};