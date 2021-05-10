module.exports = {
    name: "commands",
    description: "embed for the various commands on the bot",

    execute(message, args, Discord) {
        const commandEmbed = new Discord.MessageEmbed()
        .setColor("#7dbfc7")
        .setTitle("Bot Rules and Commands")
        .setURL("https://github.com/allanlzee/DiscordBotRevised")
        .setAuthor("Allan Zhou, Bloor C.I. TOPS '23")
        .setImage("https://miro.medium.com/max/12000/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg")
        .setDescription("The various embeds for Allan's Personal Bot")
        .addFields(
            {name: "Say Hello to Allan's Bot", value: "$hello"},

            {name: 'Add Role to User (Admin/Programmer)', value: "$add_role"},
            {name: 'Add Role to Others (Admin/Programmer)', value: "$add_role_admin"},
            {name: 'Ban User (Admin)', value: "$ban"},
            {name: "Review Bot's JavaScript Code", value: "$bot_code"},
            
            {name: 'See All Bot Commands', value: "$commands"},
            {name: 'Play One Song', value: "$join_voice"}, 
            {name: 'Kick User (Admin)', value: "$kick"},
            {name: 'See Individual Permissions', value: "$permissions"},
            {name: 'Play Song from Queue', value: "$queue"}, 
            {name: 'Add Song to Queue', value: "$queue_add"},
            {name: 'Remove Roles (Admin/Programmer)', value: "$remove_role"},
            {name: 'View Roles', value: "$roles"},
            {name: 'View Role Permissions', value: "$role_permissions"},
            {name: 'See Schedule for a User', value: "$schedule"},
            {name: 'Join Voice Channel', value: "$voice"},
            {name: 'Check Voice Permissions', value: "$voice_permissions"}
        )
        .setFooter("Send all bot feedback to @allanlzee.");

        message.channel.send(commandEmbed); 
    }
}