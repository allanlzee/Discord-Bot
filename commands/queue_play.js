const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search'); 

module.exports = {
    name: 'queue-play',
    description: "plays music from an existing queue", 

    async execute(message, args, servers) {

        if (!servers.queue) {
            message.channel.send("You need to initialize a queue using $queue."); 
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
        message.channel.send('Playing from Queue.'); 

        /* while(servers.queue.length > 0) {
            const video = servers.queue[0]; 
             
            const currSong = await videoFinder(video);
            message.channel.send(`▶️ Playing ${currSong.title}!`); 

            const stream = ytdl(video.url, {filter: 'audioonly'}); 
            const length = video.length * 1000;
            
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                servers.queue.shift();
            });
            // await asyncio.sleep(length); 
        } */

        // Sleep Function

        while (servers.queue.length > 0) {
            const video = servers.queue[0];

            const currSong = await videoFinder(video); 
            message.channel.send(`▶️ Playing ${currSong.title}!`); 

            const stream = ytdl(video.url, {filter: 'audioonly'}); 
            
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                message.channel.send(`Finished song ${currSong.title}`);
            }); 

            // Find a way to stop the bot from blowing through the queue and
            // not playing anything
        } 

        function play(connection, message, servers) {

            servers.dispatcher = connection.play(ytdl(servers.queue[0], {filter: "audioonly"}));

            servers.dispatcher.setVolume(0.2); 

            servers.dispatcher.on("end", function() {
                if (servers.queue[0]) {
                    play(connection, message, servers);
                } else {
                    connection.disconnect(); 
                }
            }); 
        }  

        play(connection, message, servers);

        voiceChannel.leave();
        message.channel.send("Finished Queue."); 

    }
}