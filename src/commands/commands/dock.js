const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "dock",
        description: "Get a random dock from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const docksJsonData = await fs.readFile("data/rooms.json", {encoding: "utf8"});
      const docksMap = JSON.parse(docksJsonData);
      const docks = docksMap["docks"];
      const dock = docks[Math.floor(Math.random() * docks.length)];

      const embed = new EmbedBuilder()
      .setColor(`#d92221`)
      .setTitle(`${dock.name}`)
      .setImage(`https://cdn.sylvee.xyz/pressuredock${dock.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};