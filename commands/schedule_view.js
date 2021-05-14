module.exports = {
    name: "schedule_view",
    description: "outputs schedule to user",

    execute(message, args, servers, Discord) {
        if (!args) {
            message.channel.reply("You have not specified a user or an event.");
            return; 
        }

        const member = message.mentions.users.first(); 

        if (!servers[member]) {
            message.channel.send("You need to create a schedule first (use $schedule_create) or specify a user.");
            return;
        } 

        // Print the schedule in an embed
        const schedule = servers[member].sort();  

        let commandEmbed = new Discord.MessageEmbed()
        .setColor("#ff7f50")
        .setTitle(`Schedule for ${member.username}`)
        .setAuthor("Allan Zhou")
        .setImage("https://img.icons8.com/clouds/2x/imac-clock.png")
        .setDescription(`Individual Schedule for ${member.username}.`)
        .addFields(
            {name: "Schedule", value: "Empty Schedule. Try adding an event using $schedule_add!"}
            // If schedule is undefined, the program will crash
        )
        .setFooter("Use $schedule_add to add schedule items."); 

        if (schedule.length != 0) {
            commandEmbed = new Discord.MessageEmbed()
            .setColor("#ff7f50")
            .setTitle(`Schedule for ${member.username}`)
            .setAuthor("Allan Zhou")
            .setImage("https://img.icons8.com/clouds/2x/imac-clock.png")
            .setDescription(`Individual Schedule for ${member.username}`)
            .addFields(
                {name: "Schedule", value: schedule}
                // If schedule is undefined, the program will crash
            )
            .setFooter("Use $schedule_add to add schedule items."); 
            message.channel.send(commandEmbed); 
        } else {
            message.channel.send(`Schedule for ${member.username} is empty.`);
            return; 
        }
    }
}