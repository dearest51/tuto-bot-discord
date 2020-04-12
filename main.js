const Discord = require('discord.js');
const client = new Discord.Client();

const broadcast = client.voice.createBroadcast();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone, bonjour à tous'  , {disableEveryone: false} );
  if (msg.content === 'noteveryone') msg.channel.send("@everyone (noteveryone), bonjour à tous");
 
});

client.login("Njk4OTE4MzUzMDMyNzA4MjA2.XpM1PQ.C5b6kRgrSGaYuRlpj7t-N2HOakM");

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

//test yt

//const ytdl = require('ytdl-core');
//broadcast.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A', { filter: 'audioonly' }));


//broadcast.play(' C:\Users\33768\Documents\untitled.mp3');