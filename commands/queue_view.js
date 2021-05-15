module.exports = {
    name: "queue_view",
    description: "see what is in the queue", 

    execute(message, args, servers, Discord) {
        let songs = []; 
        let length = servers.queue.length; 
        for (let i = 0; i < length; i++) {
            songs.push(servers.queue[i]); 
        }

        if (!songs) {
            message.channel.send("No songs in the queue."); 
        } else {
            const commandEmbed = new Discord.MessageEmbed()
            .setColor("#5ac18e")
            .setTitle("Music Queue")
            .setAuthor("Music Bot")
            .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLRjrvfza3oNchpwREG4U_W2rSTip6EKurQ&usqp=CAU")
            .setDescription("View the Music Bot's Queue")
            .addFields(
                {name: "Queue", value: songs}
            )
            .setFooter("Use $queue_add to add songs.");
            
            message.channel.send(commandEmbed); 
        }
    }
}