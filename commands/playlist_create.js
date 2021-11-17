module.exports = {
    name: 'playlist_create', 
    description: "adds a playlist for a person to the server", 

    async execute(message, args, servers) {
        let author = message.author.toString() 
        console.log(author + " created a playlist.")

        if (!args) {
            message.channel.reply("Please specify the name of your playlist." +
            "Playlist names should be one word long.")
            return
        }

        let playlist_name = args.join(' ')

        if (!servers[playlist_name]) {
            servers[playlist_name] = []; 
            message.channel.send(`Playlist ${playlist_name} was created, ${author}.`) 

            message.channel.send("Add songs to the playlist using %playlist_add <playlist_name> song.") 
        }
    
    }
}