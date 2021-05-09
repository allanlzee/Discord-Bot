module.exports = {
    name: 'hello',
    description: "this is a hello command",
    execute(message, args, author){
        message.channel.send('Hello ' + author + "!"); 
    }
}
