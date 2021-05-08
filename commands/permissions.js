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

module.exports = {
    name: "voice_permissions",
    description: "displays voice channel permissions",

    execute(message, args) {
        if (message.member.permissions.has("PRIORITY_SPEAKER")) {
            message.channel.send("You have priority speaking.");
        } else {
            message.channel.send("You do not have priority speaking."); 
        }

        if (message.member.permissions.has("CONNECT")) {
            message.channel.send("You can connect.");
        } else {
            message.channel.send("You cannot connect."); 
        }

        if (message.member.permissions.has("SPEAK")) {
            message.channel.send("You can speak.");
        } else {
            message.channel.send("You cannot speak."); 
        }

        if (message.member.permissions.has("MUTE_MEMBERS")) {
            message.channel.send("You can mute others.");
        } else {
            message.channel.send("You cannot mute others."); 
        }

        if (message.member.permissions.has("DEAFEN_MEMBERS")) {
            message.channel.send("You can deafen others.");
        } else {
            message.channel.send("You cannot deafen others."); 
        }

        if (message.member.permissions.has("MOVE_MEMBERS")) {
            message.channel.send("You can move members.");
        } else {
            message.channel.send("You cannot move members."); 
        }
    }
}

module.exports = {
    name: "roles_permissions", 
    description: "outputs a user's permissions regarding roles", 

    execute(message, args) {
        if (message.member.permissions.has("CHANGE_NICKNAME")) {
            message.channel.send("You can change nicknames."); 
        } else {
            message.channel.send("You cannot change nicknames.");
        }

        if (message.member.permissions.has("MANAGE_NICKNAME")) {
            message.channel.send("You can manage nicknames."); 
        } else {
            message.channel.send("You cannot manage nicknames.");
        }

        if (message.member.permissions.has("MANAGE_ROLES")) {
            message.channel.send("You can change roles."); 
        } else {
            message.channel.send("You cannot change roles.");
        }
    }
}