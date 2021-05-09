module.exports = {
    name: "play",
    description: "plays music after a pause",

    async execute(message, args) {
        if(!args) {
            message.channel.send("You need to join a voice channel.");
            return; 
        }

        const voiceChannel = message.member.voice.channel; 
        
        const permissions = voiceChannel.permissionsFor(message.client.user); 

        if (!permissions.has('CONNECT')) {
            message.channel.reply("You do not have the correct CONNECT permissions."); 
            return; 
        }

        if (!permissions.has('SPEAK')) {
            message.channel.reply("You do not have the correct SPEAK permissions."); 
            return; 
        }

        if (!args.length) {
            message.channel.reply("You have not specified an audio clip."); 
            return; 
        } 

        voiceChannel.play(); 
        message.channel.send("Now Playing!"); 
    }
}