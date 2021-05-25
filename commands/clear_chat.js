module.exports = {
    name: 'clear_chat',
    description: "deletes messages in bulk",

    async execute(message) {
        message.delete({timeout: 1000}); 
        //message.channel.send("Deleted messages. 👍");
        const fetch = await message.channel.messages.fetch({limit: 100});
        message.channel.bulkDelete(fetch);  
    }
}