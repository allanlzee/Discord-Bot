module.exports = {
    name: 'spam',
    description: 'spams a user', 
    
    async execute(message, args, servers) {
        if (!args) {
            message.channel.reply("Specify a user.");
            return; 
        }

        const member = message.mentions.users.first(); 

        if (!member) {
            message.channel.send("You have not specified a user."); 
            return; 
        }

        while (true) {
            message.channel.send(`@${member.tag}`);
        }
        
    }
}