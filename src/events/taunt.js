const fs = require("fs/promises");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    const tauntsJsonData = await fs.readFile("data/taunts.json", {encoding: "utf8"});
    const tauntsMap = JSON.parse(tauntsJsonData);
    const taunts = tauntsMap["taunts"];
    const taunt = taunts[Math.floor(Math.random() * taunts.length)];

    const chance = Math.random() * 900;
    if (chance < 898) {
      return;
    } else {
      message.channel.send(`<:Navi:1395296283333234799> ${taunt.text}`).catch((err) => {return});
    };
  },
};