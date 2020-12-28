const { Client, Collection} = require('discord.js');

class Bot extends Client {
	constructor(options) {
		super(options);
		this.config = require("../config.js");
		this.commands = new Collection();
	}
}

module.exports = Bot
