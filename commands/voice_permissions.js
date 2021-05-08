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