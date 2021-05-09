module.exports = {
    name: 'add_role', 
    description: "adds a role to a user on the server",

    execute(message, args) {
        let oldMember = message.mentions.users.first();
        let newMember = message.guild.member(oldMember); 
        let newRole = args[1].toLowerCase(); 

        const admin = "840332334753382481";
        const programmer = "840318933910683690"; 
        const functionalBot = "840319357627924590"; 
        const BETAbot = "840319423410733147"; 
        const closedBot = "840319468835176457";
        
        if (message.member.roles.cache.has(admin)) {
            switch(newRole) {
                case 'programmer':
                    newMember.roles.add(programmer).catch(console.error);
                    message.channel.send(`Added role Programmer to ${newMember}`); 
                    break; 
                case 'functional-bot':
                    newMember.roles.add(functionalBot).catch(console.error); 
                    message.channel.send(`Added role Functional Bot to ${newMember}`); 
                    break; 
                case 'beta-bot':
                    newMember.roles.add(BETAbot).catch(console.error);
                    message.channel.send(`Added role BETA Bot to ${newMember}`); 
                    break;
                case 'closed-bot':
                    newMember.roles.add(closedBot).catch(console.error);
                    message.channel.send(`Added role Closed Bot to ${newMember}`); 
                    break; 
                default:
                    message.channel.send(`Error: Cannot add role ${newRole} to ${newMember}`); 
                    break; 
            }
        }
    } 
}