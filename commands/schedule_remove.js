module.exports = {
    name: "schedule_remove",
    description: "removes an activity from the schedule using number", 

    execute(message, args, servers) {
        if (!args[1]) {
            message.channel.send("Remember to add arguments <member> and <event>!");
            return; 
        }

        const member = message.mentions.users.first();

        if (!servers[member]) {
            message.channel.send("You need to create a schedule first (use $schedule_create).");
            return; 
        }

        let event = parseInt(args[1]) - 1; 
        let schedule = servers[member]; 

        if (event >= 0) {
            let activity = schedule[event]; 
            schedule.splice(event, 1); 
            message.channel.send(`Successfully removed event ${activity} from ${member}'s schedule.`);
        } else {
            message.channel.send("Invalid event number."); 
            return; 
        }
    }
}