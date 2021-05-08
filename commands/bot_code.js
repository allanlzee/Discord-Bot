module.exports = {
    name: 'bot_code',
    description: "access to GitHub repositories",

    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "Programmer"); 

        // if (message.member.roles.cache.some(r => r.name === "840318933910683690"))
        if (message.member.roles.cache.has('840318933910683690')) {
            message.channel.send("https://github.com/allanlzee"); 
        } 
        else {
            message.channel.send("You do not have the role to access this command.");
            message.channel.send("You now have the Programmer role.") 
            message.member.roles.add('840318933910683690').catch(console.error);
        }
    }
}