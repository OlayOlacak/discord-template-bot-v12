const Client = require("../main");
const { readdirSync } = require("fs");

const Events = readdirSync("./Events");

Events.forEach((eventName) => {

  const Event = require(`../Events/` + eventName);
  const event = new Event();

  try {
    Client.on(eventName.split(".")[0], (...args) => event.execute(Client, ...args));
    delete require.cache[require.resolve(`../Events/${eventName.split(".")[0]}`)];
  } catch (err) {
    console.log("Error : " + err);
  }
});
