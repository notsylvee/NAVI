const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 750;
        const taunts = [
          "Since you're unable to follow simple instructions, I have been given permission to terminate you. Goodbye.",
          "It would seem as if you do not have the cognitive function required to do your tasks. Please stand by for execution."
        ];
        const taunt = taunts[Math.floor(Math.random() * taunts.length)];
        if (chance < 747) {
            return;
          } else {
            message.channel.send(`${taunt}`);
          };
    },
};