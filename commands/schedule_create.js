module.exports = {
    name: 'schedule_create', 
    description: "adds a schedule for a person to the server",
    
    async execute(message, args, servers) {

        if (!args) {
            message.channel.reply("You have not specified a user.");
            return; 
        }

        const member = message.mentions.users.first(); 

        if (!member) {
            message.channel.send("You have not specified a user."); 
        }

        if (!servers[member]) {
            servers[member] = []; 
            message.channel.send(`Successfully created empty schedule for ${member.username}. 🎉`)
        } else {
            message.channel.send(`User ${member.tag} already has a schedule.`); 
            return; 
        }
    }
}