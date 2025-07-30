const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "roomtype",
        description: "Get a random roomtype from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const roomtypesJsonData = await fs.readFile("data/rooms.json", {encoding: "utf8"});
      const roomtypesMap = JSON.parse(roomtypesJsonData);
      const roomtypes = roomtypesMap["roomtypes"];
      const roomtype = roomtypes[Math.floor(Math.random() * roomtypes.length)];

      const embed = new EmbedBuilder()
      .setColor(`#d92221`)
      .setTitle(`${roomtype.name}`)
      .setImage(`https://cdn.sylvee.xyz/pressureroomtype${roomtype.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};