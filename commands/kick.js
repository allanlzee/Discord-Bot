module.exports = {
    name: 'kick',
    description: "kicks a user from the server", 

    execute(message, args, argument, userTag) {
        if (!argument) {
            message.channel.send("No user specified."); 
            return; 
        }

        const user = message.mentions.users.first(); 

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
            try {
                member.kick("You were kicked."); 
            } 
            catch (err) {
                message.reply(`User ${userTag} is not in this server.`); 
                console.log(err); 
            }
            message.reply(`User ${userTag} is not in this server.`); 
        }
    }
}

module.exports = {
    name: 'ban',
    description: "bans a user from the server", 

    execute(message, args, argument, userTag) {
        if (!argument) {
            message.channel.send("No user specified."); 
            return; 
        }

        const user = message.mentions.users.first(); 

        if (user) {
            const member = message.guild.member(user); 

            if (member) {
                member.ban("You were kicked from @allanlzee's server.").then(() => {
                    message.reply(`Successfully banned ${userTag}`);
                }).catch(err => {
                    message.reply(`Unable to ban ${userTag}`); 
                    console.log(err); 
                }); 
            } else {
                message.reply(`User ${userTag} is not in this server.`); 
            }
        } else {
            message.reply(`User ${userTag} is not in this server.`); 
        }
    }
}
