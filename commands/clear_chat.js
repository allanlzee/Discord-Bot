module.exports = {
    name: 'clear_chat',
    description: "deletes messages in bulk",

    async execute(message, args) {
        message.delete({timeout: 1000}); 
        let bulk = args[0]; 
        //message.channel.send("Deleted messages. 👍");
        const fetch = await message.channel.messages.fetch({limit: bulk});
        message.channel.bulkDelete(fetch);  
    }
}