module.exports = {
    name: "remove_role", 
    description: "removes a role from a user",
    
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
                    if (newMember.roles.cache.has(programmer)) {
                        newMember.roles.remove(programmer).catch(console.error);
                        message.channel.send(`Removed role Programmer from ${newMember}`); 
                    } else {
                        message.channel.send(`User ${newMember} does not have this role.`); 
                    }
                    break; 

                case 'functional-bot':
                    if (newMember.roles.cache.has(functionalBot)) {
                        newMember.roles.remove(functionalBot).catch(console.error); 
                        message.channel.send(`Removed role Functional Bot from ${newMember}`); 
                    } else {
                        message.channel.send(`User ${newMember} does not have this role.`); 
                    }
                    break; 

                case 'beta-bot':
                    if (newMember.roles.cache.has(BETAbot)) {
                        newMember.roles.remove(BETAbot).catch(console.error);
                        message.channel.send(`Removed role BETA Bot from ${newMember}`); 
                    } else {
                        message.channel.send(`User ${newMember} does not have this role.`); 
                    }
                    break;

                case 'closed-bot':
                    if (newMember.roles.cache.has(closedBot)) {
                        newMember.roles.remove(closedBot).catch(console.error);
                        message.channel.send(`Removed role Closed Bot from ${newMember}`); 
                    } else {
                        message.channel.send(`User ${newMember} does not have this role.`); 
                    }
                    break; 

                default:
                    message.channel.send(`Error: Cannot remove role ${newRole} from ${newMember}`); 
                    break; 
            }
        }
    } 
}