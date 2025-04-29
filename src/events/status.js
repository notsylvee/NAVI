const { ActivityType } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        if (!message.channel.id === `1359404696149819412`) return;

        client.user.setPresence({
              status: "dnd",
              activities: [
                {
                  type: ActivityType.Custom,
                  name: "customstatus",
                  state: "We at Urbanshade would like to personally thank you for your... Continued 'cooperation'.",
                },
              ],
            });
    }
}