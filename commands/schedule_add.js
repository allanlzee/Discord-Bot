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

        var event = ""; 
        const length = args.length;

        for (let i = 1; i < length; i++) {
            event += args[i].toString();
            event += " "; 
        }

        servers[member].push(event); 
        message.channel.send(`Event ${event} added to ${member.username}'s schedule.`);
    }
}