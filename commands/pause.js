module.exports = {
    name: 'pause',
    description: "pauses the music bot",

    async execute(message, args, servers) {

        var server = servers[message.guild.id];

        if(message.guild.voice.connection) {
            for (var i = server.queue.length - 1; i >= 0; i--) {
                server.queue.splice(i, 1); 
            }

            server.dispatcher.end(); 
            console.log("Queue Paused."); 
        }

        if(message.guild.connection) message.guild.voice.connection.disconnect(); 
    }
}