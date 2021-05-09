module.exports = {
    name: 'ban',
    description: "bans a user from the server", 

    execute(message, args) {
        if (!args) {
            message.channel.send("No user specified."); 
            return; 
        }

        const user = message.mentions.users.first(); 
        const userTag = user.tag; 

        if (user) {
            const member = message.guild.member(user); 

            if (member) {
                member.kick("You were kicked from @allanlzee's server.").then(() => {
                    message.reply(`Successfully kicked ${userTag}`);
                }).catch(err => {
                    message.reply(`Unable to kick ${userTag}`); 
                    console.log(err); 
                }); 
            } else {
                message.reply(`User ${userTag} is not in this server.`); 
            }
        } else {
            message.reply(`User ${userTag} is not in this server.`); 
            console.log(err); 
            
            message.reply(`User ${userTag} is not in this server.`); 
        }
    }
}
