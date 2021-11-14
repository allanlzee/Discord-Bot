const { execute } = require("./queue_add");

module.exports = {
    name: "queue_clear",
    description: "clears the queue",
    
    async execute(message, servers) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
          message.channel.send("You need to be in a voice channel.");
          return;
        }

        servers.queue = [];
        message.channel.send("Queue cleared.")
    }
}