const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search')

module.exports = {
    name: 'queue_skip',
    description: "pops the queue",

    async execute(message, servers) {
        // The author of the message must be in the voice channel to switch. 
        const voiceChannel = message.member.voice.channel;
        
        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel.");
            return; 
        }

        if (servers.queue.length > 0) {
            servers.queue.shift();
        } else {
            message.channel.send("The queue is empty. Add songs using %queue_add.")
        }
         
    }
}