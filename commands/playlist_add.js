const { execute } = require("./schedule_create");

module.exports = { 
    name: 'playlist_add', 
    description: "adds songs to a playlist, which has been created in servers", 

    async execute(message, args, servers) {
        let author = message.author.toString() 
         
        if (args.length < 2) {
            message.channel.reply("Please specify the playlist name and the song name.")
            return
        }

        let playlist_name = args[0].toString() 

        if (!servers[playlist_name]) {
            message.channel.reply(`There is no playlist in the server named ${playlist_name}.`)
            return 
        }

        let song_name = args.slice(1).join(' ')

        servers[playlist_name].push(song_name)
    }
}