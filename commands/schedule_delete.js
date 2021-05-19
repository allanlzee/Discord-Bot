module.exports = {
    name: "schedule_delete",
    description: "deletes a schedule",

    execute(message, args, servers) {
        if (!args) {
            message.channel.send("Remember to add arguments <member>!");
            return; 
        }

        const member = message.mentions.users.first();

        if (!servers[member]) {
            message.channel.send(`Member ${member.username} does not have a schedule.`);
            return; 
        }

        delete servers[member]; 
        message.channel.send(`Schedule for ${member.username} has been deleted.`); 
    }
}