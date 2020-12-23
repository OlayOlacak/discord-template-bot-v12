const client = require("../main");

module.exports = class {

    constructor(client) {
      this.client = client;

    }

    async execute() {

        console.log(client.user.username + " bot is online!");

    }
}
