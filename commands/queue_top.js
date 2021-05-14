const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search')

module.exports = {
    name: 'queue_top',
    description: "pops the queue",

    async execute(message, args, servers) {
        if (!args) {
            message.channel.reply("You have not specified an audio clip."); 
            return; 
        } 

        // Video Finder Function 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query); 

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            
        }

        const voiceChannel = message.member.voice.channel; 

        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel.");
            return; 
        }

        // If there is not existing queue, initialize one
        if (!servers[message.guild.id]) {
            servers = {
                queue: []
            }
        } else {
            message.channel.send("There is already a queue."); 
        } 

        const permissions = voiceChannel.permissionsFor(message.client.user); 

        if (!permissions.has('CONNECT')) {
            message.channel.reply("You do not have the correct CONNECT permissions."); 
            return; 
        }

        if (!permissions.has('SPEAK')) {
            message.channel.reply("You do not have the correct SPEAK permissions."); 
            return; 
        }

        const connection = await voiceChannel.join();
        
        const nextSong = servers.queue[0]; 

        if (nextSong) {
            servers.queue.shift(); 
            const currSong = await videoFinder(nextSong); 

            if (currSong) {
                const stream = ytdl(currSong.url, {filter: "audioonly"}); 

                connection.play(stream, {seek: 0, volume: 0.5})
                .on('finish', () => {
                    message.channel.send(`Finished ${currSong.url}!`);
                });

                await message.channel.send(`▶️ Now Playing ***${currSong.title}***`);
            }
        } else {
            message.channel.send("Queue has no song.");
        }
    }
}