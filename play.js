const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    //Verif de base
    if (!message.member.voiceChannel)
     return message.channel.send("Connectez vous à un salon vocal");
    //verif si on est bien co à un serveur vocal
    if(message.guild.me.voiceChannel)
     return message.channel.send("Le bot est déja connecté à un salon");
    if(!args[0]) 
     return message.channel.send('Merci de préciser un lien YT');
    //verifie la présence d'un lien YT

    const validate = await ytdl.validateURL(args[0]);
    if (!validate) 
     return message.channel.send('URL non valide');
    //vérifie que l'url est OK


    //Commande
    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voiceChannel.join();
    //pour que le bot puisse join
    const dispatcher = await connection.playStream(
        ytdl(args[0], {filter: 'audioonly'})
        );

    message.chanel.send(`Musique ajoutée : $(info.title)`);


};

module.exports.help = {
    name: 'play'
};
