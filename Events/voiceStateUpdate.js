const client = require("../main");
const ms = require("parse-ms");
var date = "";

module.exports = class {

    constructor(client) {
      this.client = client;

    }

    async execute(oldUser, newUser) {

      if(oldUser.channelID && newUser.channelID) return;


      if (!oldUser.channelID) {

        console.log("kanala girdi");
        date = Date.now();

      } else if (!newUser.channelID) {
        console.log("kanaldan çıktı")
        const dates = ms(Date.now() - date);
        console.log(dates);
      }
  }
}
