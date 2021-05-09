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