module.exports = {
    name: 'daily',
    description: "daily points for a user",

    execute(message, args, daily, client, Discord, author) {
        const noob = "847125961609707560"; 
        const master = "847125974336143380"; 

        let length = Object.keys(daily).length; 

        const server = client.guilds.cache.get("839660448227131392"); 

        if (length == 0) {
            server.members.cache.forEach(member => daily[member.user] = 0); 

            let members = []; 

            for (var key in daily) {
                members.push(key); 
            }

            let member_scores = []; 
            for (let i = 0; i < members.length; i++) {
                let scores = []; 
                scores.push(members[i]); 
                scores.push(" 0"); 
                member_scores.push(scores); 
            }

            message.channel.send("Created Daily Points."); 
            let daily_points = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setTitle("Discord Bot Project Daily Points")
            .setAuthor("Allan Zhou")
            .setDescription("Point totals for Allan's Guild.")
            .addFields(
                {name: "Points", value: member_scores}
            ).setFooter("Use $daily to score points.");
            message.channel.send(daily_points); 
        } 

        else {
            let points = Math.floor(Math.random() * 100);
            daily[author] += points; 

            let members = []; 
            let point_members = []; 
            for (var key in daily) {
                members.push(key); 
                point_members.push(daily[key]);
            }

            let member_scores = []; 
            for (let i = 0; i < members.length; i++) {
                let scores = []; 
                scores.push(members[i]); 
                scores.push(" " + point_members[i].toString());
                member_scores.push(scores); 
            }

            let daily_points = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setTitle("Discord Bot Project Daily Points")
            .setAuthor("Allan Zhou")
            .setDescription("Point totals for Allan's Guild.")
            .addFields(
                {name: "Points", value: member_scores}
            ).setFooter("Use $daily to score points.");

            message.channel.send(`${author} earned ${points} points!`); 
            message.channel.send(daily_points); 
        }
    }
}