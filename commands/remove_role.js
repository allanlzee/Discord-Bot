module.exports = {
    name: "remove_role", 
    description: "removes a role from a user",
    
    execute(message, args) {

        if (message.member.roles.cache.has("840319423410733147")) {
            // BETA bot
            message.member.roles.remove("840319423410733147"); 
            message.channel.send("Role removed."); 
        }
    }
}