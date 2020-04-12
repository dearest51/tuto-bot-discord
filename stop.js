const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
     //Verif de base
    if (!message.member.voiceChannel)
      return message.channel.send("Connectez vous à un salon vocal");
     //verif si on est bien co à un serveur vocal
    if(!message.guild.me.voiceChannel)
      return message.channel.send("Le bot n'est pas connecté à un salon");
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID)
      return message.channel.send("Vous n'etes pas dans le même salon");
    message.guild.me.voiceChannel.leave();
    message.delete();
     
 
 

};

module.exports.help = {
    name: 'stop'
};
