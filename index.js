/**
 * Author: Sergio Fernández <@sfdez0>
 * Date: 24/12/2023
 * License: MIT
 * Description: A simple discord bot that provides the tweet preview
 *             for any twitter or x url sent in any channel.
 */

const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

/**
 * For every msg that is sent in any channel the bot has access to,
 * it will check if the msg contains "twitter.com" or "x.com" and it
 * will add the "fx" prefix to that url
 */
client.on(Events.MessageCreate, message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Ignore messages that don't contain "twitter.com" or "x.com"
    let msg = message.content;
    if (msg.includes("twitter.com")){
        // Replace the url with the fx version
        let response = msg.replace("twitter.com", "fxtwitter.com");
        // Send the reply to the original msg
        message.reply(response);
    }
    else if (msg.includes("x.com")){
        // Replace the url with the fx version
        let response = msg.replace("x.com", "fxtwitter.com");
        // Send the reply to the original msg
        message.reply(response);
    }
});

// TODO "token" should be your discord bot token
client.login("token");
