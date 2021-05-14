module.exports = {
    name: "bug_reports",
    description: "View bugs",

    execute(message, args, servers, Discord) {
        
        const bugs = servers.bug_reports; 

        if (!bugs) {
            message.channel.send("No bug reports found. 🙌🏻"); 
            return; 
        } else {
            let commandEmbed = new Discord.MessageEmbed()
            .setColor("#ac25e2")
            .setTitle(`Bug Reports`)
            .setAuthor("Allan Zhou")
            .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSu-n5vCidYEmb_uJouhIgSXGdMmjEcdtjw&usqp=CAU")
            .setDescription(`Unresolved Errors on the Bot.`)
            .addFields(
                {name: "Schedule", value: bugs}
                // If schedule is undefined, the program will crash
            )
            .setFooter("Use $bug to add bug reports."); 

            message.channel.send(commandEmbed);
        }
    }
}