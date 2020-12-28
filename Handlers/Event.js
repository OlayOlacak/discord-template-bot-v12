const Client = require("../main");
const { readdirSync } = require("fs");

const Events = readdirSync("./Events");

Events.forEach((eventName) => {

    const Event = require(`../Events/` + eventName);
    const event = new Event();

    try {
     Client.on(eventName.split(".")[0], (...args) =>  event.execute(...args));
   } catch (err) {
     console.log("Error : " + err);
  }
});
