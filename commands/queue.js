const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search'); 

module.exports = {
    name: 'queue',
    decription: "joins a voice channel",

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

        // BETA Mode
        const connection = await voiceChannel.join(); 
        message.channel.send(`Queueing ${args.join(' ')}! 🤠 `); 

        const video = await videoFinder(args.join(' '));

        servers.queue.push(video); 

        while(servers.queue.length > 0) {
            const video = servers.queue[0]; 
            servers.queue.shift();

            if (video) {
                const stream = ytdl(video.url, {filter: "audioonly"}); 

                connection.play(stream, {seek: 0, volumn: 0.5})
                .on('finish', () => {
                    message.channel.send(`Finished ${video.url}`); 
                });
                await message.channel.send(`▶️ Now Playing ***${video.title}***`);
            } else {
                message.channel.send('No video results found.'); 
            } 
        } 

        console.log("Queue Finished"); 
    }
}