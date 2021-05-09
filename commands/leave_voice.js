module.exports = {
    name: 'leave_voice',
    description: "stop the bot and leave the channel",

    async execute(message, args) {
        const voiceChannel = message.member.voice.channel; 
        
        if(!voiceChannel) {
            message.channel.send("You need to be in a voice channel."); 
            return; 
        }

        await voiceChannel.leave(); 
        await message.channel.send("Leaving channel! 🤗 "); 
    }
}