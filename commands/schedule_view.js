module.exports = {
    name: "schedule_view",
    description: "outputs schedule to user",

    execute(message, args, servers, Discord) {
        if (!args) {
            message.channel.reply("You have not specified a user.");
            return; 
        }

        const member = message.mentions.users.first(); 

        if (!servers[member]) {
            message.channel.send("You need to create a schedule first (use $schedule_create).");
            return;
        } 

        // Print the schedule in an embed
        const schedule = servers[member].sort();  
        let length = servers[member].length; 

        const commandEmbed = new Discord.MessageEmbed()
        .setColor("#ff7f50")
        .setTitle(`Schedule for ${member.username}`)
        .setAuthor("Allan Z.")
        .setImage("https://img.icons8.com/clouds/2x/imac-clock.png")
        .setDescription("Individual Schedules")
        .addFields(
            {name: "Schedule", schedule}
        )
        .setFooter("Use $schedule_add to add schedule items."); 

        message.channel.send(commandEmbed); 

    }

}