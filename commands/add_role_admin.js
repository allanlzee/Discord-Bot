module.exports = {
    name: "add_role_admin",
    description: "adds roles to other people", 

    execute(message, args, newRole, member) {
        if (message.member.roles.cache.has("840332334753382481")) {
            switch (newRole) {
                case "Programmer":
                    
            }

        } else {
            message.channel.send("You are not an Admin."); 
        }
    }
}