const Discord = require('discord.js');
const {TOKEN, PREFIX} = require("./config");
const client = new Discord.Client();

const broadcast = client.voice.createBroadcast();
client.on('ready', () => {
    console.log("je suis pret");
})

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send('Pong!');
  
});

client.login(TOKEN);

