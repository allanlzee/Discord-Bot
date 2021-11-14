module.exports = {
    name: "bug_reports",
    description: "View bugs",

    execute(message, args, servers, Discord, client) {

        let commandEmbed = new Discord.MessageEmbed()
            .setColor("#ac25e2")
            .setTitle(`Bug Reports`)
            .setAuthor("Allan Zhou")
            .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSu-n5vCidYEmb_uJouhIgSXGdMmjEcdtjw&usqp=CAU")
            .setDescription(`Unresolved Errors on the Bot.`)
            .addFields(
                {name: "Schedule", value: "Bugs will be shown here."}
                // If schedule is undefined, the program will crash
            )
            .setFooter("Use $bug to add bug reports."); 

        const bugsChannel = client.channels.cache.get("908912379058860073"); 
        
        const bugs = servers.bug_reports; 

        if (bugs.length === 0) {
            message.channel.send("No bug reports found. 🙌🏻"); 
            return; 
        } else {
            commandEmbed = new Discord.MessageEmbed()
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

            bugsChannel.send(commandEmbed);
            message.channel.send("Report issued. Check channel bot-bugs for more information."); 
        }
    }
}