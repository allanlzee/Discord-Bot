module.exports = {
    name: "bug",
    description: "allows user to report bugs so the creator can see",

    execute(message, args, servers) {
        let newMessage = ""; 
        let length = args.length; 
        for (let i = 0; i < length; i++) {
            newMessage += args[i].toString(); 
            newMessage += " "; 
        }

        servers.bug_reports.push(newMessage); 
        message.channel.send("Reported Bug! ✅ ");  
    }
}