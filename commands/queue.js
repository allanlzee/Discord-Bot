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
        /* if (!servers[message.guild.id]) {
            servers = {
                queue: []
            }
        } else {
            message.channel.send("There is already a queue."); 
        } */ 

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

        const video = args.join(' ');

        servers.queue.push(video); 

        // TODO: Fix this function 
        while(servers.queue.length > 0) {
            const video = servers.queue[0]; 
            servers.queue.shift();

            const nextSong = await videoFinder(video); 

            /* if (nextSong) {
                const stream = ytdl(nextSong.url, {filter: "audioonly"}); 
                const queuedSong = servers.queue[0];

                if (queuedSong) {
                    const nextStream = ytdl(queuedSong.url, {filter: "audioonly"});
                }
                
                connection.play(stream, {seek: 0, volume: 0.5})
                .on('finish', () => {
                    message.channel.send(`Finished ${nextSong.url}`); 
                    if (queuedSong) {
                        connection.play(nextStream, {seek: 0, volume: 0.5});
                    } else {
                        connection.play(nextStream, {seek: 0, volume: 0.5}); 
                        message.channel.send("Queue Finished."); 
                    }
                });
                await message.channel.send(`▶️ Now Playing ***${nextSong.title}***`);
            } else {
                message.channel.send('No video results found.'); 
            } */ 
        } 

        console.log("Queue Finished"); 

        /* function play(connection, message, servers) {
            var server = servers[message.guild.id];

            server.dispatcher = connection.playStream(ytSearch(server.queue[0], {filter: "audioonlu"}));

            server.queue.shift(); 

            server.dispatcher.on("end", function() {
                if (server.queue[0]) {
                    play(connection, message); 
                } else {
                    connection.disconnect(); 
                }
            });
        }

        if(!args) {
            message.channel.send("You need to provide a song.");
            return;
        }

        if (!message.member.voice.channel) {
            message.channel.send("You must be in a channel.");
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args); 

        if(!message.guild.voice.connection) {
            message.member.voice.channel.join().then(function(connection) {
                play(connection, message); 
            });
        } */ 
    } 
}