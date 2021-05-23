module.exports = {
    name: 'scoreboard_create',
    description: 'creates trivia scoreboard', 

    execute(message, args, trivia, client) {
        const list = client.guilds.cache.get("839660448227131392"); 

        list.members.cache.forEach(member => trivia[member.user.username] = 0);
        message.channel.send("Created Trivia Scores. ▶️ "); 
    }
}