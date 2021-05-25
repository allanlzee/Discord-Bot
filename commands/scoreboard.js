module.exports = {
    name: 'scoreboard',
    description: 'shows trivia scoreboard',

    execute(message, args, trivia, Discord) {

        let length = 0; 
        let users = []; 
        let points = []; 
        for (var key in trivia) {
            users.push(key); 
            points.push(trivia[key]); 
            length++; 
        }

        let scores = [];
        for (let i = 0; i < length; i++) {
            let stats = []; 
            stats.push(users[i]);
            stats.push(" " + points[i].toString()); 
            scores.push(stats); 
        } 

        let scoreBoard = new Discord.MessageEmbed()
        .setColor("#00CED1")
        .setTitle("Trivia Scoreboard")
        .setAuthor("Allan Zhou")
        .setImage("https://static.vecteezy.com/system/resources/previews/000/129/108/original/trivia-papper-background-illustration-vector.jpg")
        .addFields(
            {name: "Scoreboard", value: "Empty Scoreboard"}
        )
        .setFooter("Use $trivia to score points!"); 

        if (length > 0) {
            scoreBoard = new Discord.MessageEmbed()
            .setColor("#00CED1")
            .setTitle("Trivia Scoreboard")
            .setAuthor("Allan Zhou")
            .setImage("https://static.vecteezy.com/system/resources/previews/000/129/108/original/trivia-papper-background-illustration-vector.jpg")
            .addFields(
                {name: "Scoreboard", value: scores}
            )
            .setFooter("Use $trivia to score points!"); 
            message.channel.send(scoreBoard); 
        } else {
            message.channel.send(scoreBoard);
        }

    }
}