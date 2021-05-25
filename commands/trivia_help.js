module.exports = {
    name: 'trivia_help', 
    description: 'list of trivia commands', 

    execute(message, args, Discord) {
        let help = new Discord.MessageEmbed()
        .setColor("#f6546a")
        .setTitle("Trivia Commands")
        .setAuthor("Allan Zhou")
        .setImage("https://c.tadst.com/gfx/600x337/trivia.png?1")
        .addFields(
            {name: "Create Scoreboard", value: "$scoreboard_create"}, 
            {name: "View Scoreboard", value: "$scoreboard"},
            {name: "Random Trivia", value: "$trivia_random"},
            {name: "Sports", value: "Sports Trivia"}, 
            {name: "Anime", value: "$trivia_anime"},
            {name: "Computers", value: "$trivia_computers"},
            {name: "General Knowledge", value: "$trivia_general"}
        ).setFooter("Use $bugs to recommend new trivia topics."); 

        message.channel.send(help); 
    }
}