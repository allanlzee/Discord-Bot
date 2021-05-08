module.exports = {
    name: "kick_permissions",
    description: "tells user permission status in relation to a command", 

    execute(message, args) {
        let role = message.guild.roles.cache.find(r => r.name === "Programmer"); 

        if (message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("You can kick members."); 
        } else {
            message.channel.send("You cannot kick members."); 
        }

        if (message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send("You can ban members."); 
        } else {
            message.channel.send("You cannot ban members.")
        }
    }
}