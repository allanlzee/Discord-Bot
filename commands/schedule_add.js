module.exports = {
    name: "schedule_add",
    description: "adds an event to the user schedule",

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

        var event; 
        const length = args.length;

        switch (length) {
            case 2:
                event = args[1]; 
                break;
            case 3: 
                event = args[1].toString() + " " + args[2].toString(); 
                break; 
            case 4: 
                event = args[1].toString() + " " + args[2].toString() + " " + args[3].toString(); 
                break; 
            case 5: 
                event = args[1].toString() + " " + args[2].toString() + " " + args[3].toString() + " " + args[4].toString(); 
                break; 
        }

        servers[member].push(event); 
        message.channel.send(`Event ${event} added to ${member.username}'s schedule.`);
        // TODO: figure out why the schedule_view command does not print the added event
    }
}