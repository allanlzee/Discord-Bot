const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search'); 

module.exports = {
    name: "queue_add",
    description: "adds a song to an existing queue",

    async execute(message, args, servers) {

        let queue = servers.queue; 

        if (!args) {
            message.channel.send("You have not specified a song."); 
            return; 
        }

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const voiceChannel = message.member.voice.channel; 

        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel."); 
            return; 
        }

        /* if (!servers[message.guild.id]) {
            message.channel.send("You need to use command $queue to initialize a queue."); 
            return; 
        } 
        */

        const permissions = voiceChannel.permissionsFor(message.client.user); 

        if (!permissions.has('CONNECT')) {
            message.channel.reply("You do not have the correct CONNECT permissions."); 
            return; 
        }

        if (!permissions.has('SPEAK')) {
            message.channel.reply("You do not have the correct SPEAK permissions."); 
            return; 
        }

        function addToQueue(song) {
            queue.push(song); 
        }

        const video = await videoFinder(args.join(' ')); 
        addToQueue(video); 
        message.channel.send(`Added ${video.title} to the queue.`); 
        console.log(`Queue: + ${video.title}`); 
    }
}