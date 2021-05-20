module.exports = {
    name: 'class',
    description: 'sends google meet link for class',

    execute(message, args, Discord) {
        let schedule = new Discord.MessageEmbed()
        .setColor("#8a2be2")
        .setAuthor("Allan Zhou")
        .setImage("https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Meet.max-500x500.png")
        .setDescription("Current Google Meet Links for Classes.")
        .addFields(
            {name: "Robotics", value: "https://meet.google.com/lookup/eu3gtafz3x"},
            {name: "Gym", value: "https://classroom.google.com/u/1/c/MzI1OTkyMDQyMjg3"}
        )
        .setFooter("Bloor C.I."); 

        message.channel.send(schedule); 
    }
}