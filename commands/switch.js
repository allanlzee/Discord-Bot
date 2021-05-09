const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search'); 

module.exports = {
    name: "switch",
    description: "plays the specified song with a link", 

    async execute(message, args) {
        const voiceChannel = message.member.voice.channel; 

        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel."); 
            return;
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

        if (!args.length) {
            message.channel.reply("You have not specified an audio clip."); 
            return; 
        } 

        const connection = await voiceChannel.join(); 
        
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query); 
            
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null; 

        }

        const video = await videoFinder(args.join(' ')); 

        if (video) {
            const stream = ytdl(video.url, {filter: "audioonly"}); 

            connection.play(stream, {seek: 0, volume: 0.25});
            
            await message.reply(`▶️ Now Playing ***${video.title}***`);
        } else {
            message.channel.send('No video results found.'); 
        }
    }
}