module.exports = {
    name: "bug",
    description: "allows user to report bugs so the creator can see",

    execute(message, args, servers) {
        servers.bug_reports.push(message);
        message.channel.send("Thank you. We will fix the bug ASAP.");  
    }
}