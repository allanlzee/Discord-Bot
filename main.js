const Discord = require('discord.js'); 

const client = new Discord.Client(); 
const config = require("./.gitignore/config.json"); 
const fetch = require('node-fetch');
const keep_alive = require('./keep_alive.js'); 

const prefix = '$'; 

const fs = require('fs'); 

// For the Music Bot
const ytdl = require("ytdl-core"); 
const ytSearch = require("yt-search"); 

// Initialize the Music Queue
let servers = {
    queue: [], 
    bug_reports: []
}; 

let trivia = {
    
}; 

client.commands = new Discord.Collection(); 
// client.messages = new Discord.Collection(); 

// Role IDs: use \@ROLE to get the ID from the Discord message box
const programmer = "840318933910683690"; 
const functionalBot = "840319357627924590"; 
const BETAbot = "840319423410733147"; 
const closedBot = "840319468835176457";
const admin = "840332334753382481";  
 
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js')); 
for (const file of commandFiles) {
    const command = require(`./commands/${file}`); 

    client.commands.set(command.name, command); 
}

client.once('ready', () => {
    console.log("Status: ONLINE");

    client.user.setActivity("JavaScript"); 
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name); 
        guild.channels.cache.forEach((channel) => {
            console.log(` -> ${channel.name} ${channel.type} ${channel.id}`); 
        }); 
        // General Chat ID: 839660448957464627
    }); 

    // Sends Message to the General Chat
    let botChannel = client.channels.cache.get("839660448957464627");
    botChannel.send("Allan's Bot is ONLINE!");
    // generalChannel.send("https://github.com/allanlzee"); 

});

client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(" "); 
    const command = args.shift().toLowerCase(); 

    message.guild.emojis.cache.forEach(customEmoji => {
    // console.log(`${customEmoji.name} ${customEmoji.id}`);
        message.react(customEmoji); 
    }); 

    if (message.content.startsWith(prefix)) {
        processCommand(message, args, command); 
    }
});


async function processCommand(message, args, command) {

    console.log(args);
    console.log(command);
    
    let author = message.author.toString();
    console.log(author); 

    switch(command) {
        // Introduction and Greetings
        case "hello":
            client.commands.get('hello').execute(message, args, author);  
            break; 

        case "bot_code":
            client.commands.get('bot_code').execute(message, args); 
            break; 

        // Roles and Permissions
        case "add_role":
            client.commands.get('add_role').execute(message, args);
            break;

        case "add_role_admin":
            client.commands.get('add_role_admin').execute(message, args); 
            break; 

        case "kick_permissions":
            client.commands.get('kick_permissions').execute(message, args); 
            break;

        case "voice_permissions":
            client.commands.get('voice_permissions').execute(message, args); 
            break; 

        case "roles":
            client.commands.get('roles').execute(message, args); 
            break; 

        case "kick":
            client.commands.get('kick').execute(message, args);
            break;  
        
        case "ban":
            client.commands.get('ban').execute(message, args, user, userTag);
            break; 

        case "roles_permissions":
            client.commands.get('roles_permissions').execute(message, args); 
            break;  

        case "remove_role":
            client.commands.get('remove_role').execute(message, args);
            break; 

        // Message Embeds 
        case "commands":
            client.commands.get('commands').execute(message, args, Discord); 
            break;

        // Music
        case "join_voice":
            client.commands.get('join_voice').execute(message, args); 
            break;

        case "leave_voice":
            client.commands.get('leave_voice').execute(message, args); 
            break;

        case "switch":
            client.commands.get('switch').execute(message, args); 
            break; 

        case "pause":
            client.commands.get('pause').execute(message, args); 
            break; 

        case "queue": 
            client.commands.get('queue').execute(message, args, servers); 
            break;

        case "queue_add":
            client.commands.get('queue_add').execute(message, args, servers); 
            break; 

        case "queue_view":
            client.commands.get('queue_view').execute(message, args, servers, Discord);
            break; 

        case "pause":
            client.commands.get('pause').execute(message, args); 
            break; 

        case "queue_play":
            client.commands.get('queue-play').execute(message, args, servers);
            break; 

        case "queue_top":
            client.commands.get('queue_top').execute(message, args, servers);
            break;

        // Schedule
        case "schedule_create":
            client.commands.get('schedule_create').execute(message, args, servers); 
            break; 
        
        case "schedule_view":
            client.commands.get('schedule_view').execute(message, args, servers, Discord);
            break;  

        case "schedule_add":
            client.commands.get('schedule_add').execute(message, args, servers); 
            break; 

        case "schedule_remove":
            client.commands.get('schedule_remove').execute(message, args, servers); 
            break;

        case "schedule_delete":
            client.commands.get('schedule_delete').execute(message, args, servers); 
            break; 

        case "class":
            client.commands.get('class').execute(message, args, Discord); 
            break;

        // Bugs and Errors
        case "bug":
            client.commands.get('bug').execute(message, args, servers); 
            break;

        case "bug_reports":
            client.commands.get('bug_reports').execute(message, args, servers, Discord, client); 
            break;

        // Trivia Section
        case "trivia_help":
            client.commands.get('trivia_help').execute(message, args, Discord);
            break; 

        case "trivia_random":
            client.commands.get('trivia_random').execute(message, args, fetch, trivia);
            break; 

        case "trivia_sports":
            client.commands.get('trivia_sports').execute(message, args, fetch); 
            break; 
        
        case "scoreboard":
            client.commands.get('scoreboard').execute(message, args, trivia, Discord);
            break; 

        case "scoreboard_create":
            client.commands.get('scoreboard_create').execute(message, args, trivia, client); 
            client.commands.get('scoreboard').execute(message, args, trivia, Discord); 
            break; 


        // Invalid Commands
        default:
            message.channel.send("Not a valid command."); 
            break; 
    }
}

client.login(config.token); 
// Regenerate Token Frequently
