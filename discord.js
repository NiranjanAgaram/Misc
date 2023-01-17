const Discord = require('discord.js');
const client = new Discord.Client();

// Replace with your bot's token
client.login("YOUR_BOT_TOKEN");

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("message", async message => {
    if (message.content === "!mute") {
        // Get the mentioned user
        const member = message.mentions.members.first();
        // Mute the user
        try {
            await member.setMute(true);
            message.channel.send(`${member.user.tag} has been muted.`);
        } catch (err) {
            message.channel.send(`Error: ${err}`);
        }
    }
    if (message.content === "!unmute") {
        // Get the mentioned user
        const member = message.mentions.members.first();
        // Unmute the user
        try {
            await member.setMute(false);
            message.channel.send(`${member.user.tag} has been unmuted.`);
        } catch (err) {
            message.channel.send(`Error: ${err}`);
        }
    }
});
