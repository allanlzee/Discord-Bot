const ytdl = require('ytdl-core'); 
const ytSearch = require('yt-search'); 

module.exports = {
    name: 'join_voice',
    decription: "joins a voice channel",
    
    async execute(message, args, servers) {
        const voiceChannel = message.member.voice.channel; 

        if (!voiceChannel) {
            message.channel.send("You need to be in a voice channel."); 
            return; 
        }

        if (!args) {
            message.channel.send("You need to specify a song.");
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
            message.channel.send("You have not specified an audio clip."); 
            return; 
        } 

        message.channel.send("Joining Channel! 🤠 "); 

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query); 

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

      async function playVideo() {
        let new_connection = await voiceChannel.join(); 
        let args = servers.queue[0];
        
          const video = await videoFinder(args.join(' '));

          if (video) {
            const stream = ytdl(video.url, { filter: "audioonly" });

            new_connection.play(stream, { seek: 0, volume: 1 })
              .on("finish", () => {

              if (servers.queue.length != 0) {
                servers.queue.shift();
                playVideo();
              }
                
            });
              
            await message.reply(`▶️ Now Playing ***${video.title}***`);
              
          } else {
            message.channel.send("No video results found."); 
          }
        }
      
        servers.queue.push(args)
        playVideo(); 
    }
}