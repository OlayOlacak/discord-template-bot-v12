const Client = require("../main");
const { readdirSync } = require("fs");

const filesName = readdirSync("./Events");

for (fileName of filesName) {

    const Event = require(`../Events/` + fileName);
    const event = new Event();

    try {
     Client.on(fileName.split(".")[0], (...args) =>  event.execute(...args));
   } catch (err) {
     console.log("Hata : " + err);
  }
};
