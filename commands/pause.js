module.exports = {
    name: 'pause',
    description: "pauses the music bot",

    async execute(message, args) {
        const voiceChannel = message.member.voice.channel; 

        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel.");
            return;
        }

        const permissions = voiceChannel.permissionsFor(message.client.user); 
        if (!permissions.has('CONNECT')) {
            message.channel.send("You do not have the correct CONNECT permissions."); 
            return; 
        }

        if (!permissions.has('SPEAK')) {
            message.channel.send("You do not have the correct SPEAK permissions."); 
            return; 
        }

        voiceChannel.pause(); 
        
    }
}