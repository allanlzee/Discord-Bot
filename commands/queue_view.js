module.exports = {
    name: "queue_view",
    description: "see what is in the queue", 

    execute(message, args, servers, Discord) {
        let songs = []; 
        let length = servers.queue.length; 
        for (let i = 0; i < length; i++) {
            songs.push(servers.queue[i]); 
        }

        var firstSong; 
        var secondSong;
        var thirdSong; 

        if (length >= 1) {
            firstSong = songs[0].toString();
        } 
        
        if (length >= 2) {
            secondSong = songs[1].toString();
        } 
        
        if (length >= 3) {
            thirdSong = songs[2].toString();
        }

        const commandEmbed = new Discord.MessageEmbed()
        .setColor("#5ac18e")
        .setTitle("Music Queue")
        .setAuthor("Music Bot")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLRjrvfza3oNchpwREG4U_W2rSTip6EKurQ&usqp=CAU")
        .setDescription("View the Music Bot's Queue")
        .addFields(
            {name: "First", value: firstSong}
        )
        .setFooter("Use $queue_add to add songs.");


        const commandEmbed2 = new Discord.MessageEmbed()
        .setColor("#5ac18e")
        .setTitle("Music Queue")
        .setAuthor("Music Bot")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLRjrvfza3oNchpwREG4U_W2rSTip6EKurQ&usqp=CAU")
        .setDescription("View the Music Bot's Queue")
        .addFields(
            {name: "First", value: firstSong},
            {name: "Second", value: secondSong}
 
        )
        .setFooter("Use $queue_add to add songs.");

        const commandEmbed3 = new Discord.MessageEmbed()
        .setColor("#5ac18e")
        .setTitle("Music Queue")
        .setAuthor("Music Bot")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLRjrvfza3oNchpwREG4U_W2rSTip6EKurQ&usqp=CAU")
        .setDescription("View the Music Bot's Queue")
        .addFields(
            {name: "First", value: firstSong},
            {name: "Second", value: secondSong},
            {name: "Third", value: thirdSong}
        )
        .setFooter("Use $queue_add to add songs.");

        if (length === 0) {
            message.channel.send("No Songs in Queue.");
        } else if (length === 1) {
            message.channel.send(commandEmbed);
        } else if (length === 2) {
            message.channel.send(commandEmbed2); 
        } else {
            message.channel.send(commandEmbed3);
        }
    }
}