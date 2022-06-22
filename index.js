const Discord = require("discord.js"); // Requires the Discord.js Package which is needed
const client = new Discord.Client();
const token = ""; // Put your User Token in here
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./Database/main.db");

console.log("-- Code may no longer work due to Discord.JS due to version being outdated.")

client.on("ready", () => {    
    console.log(`\n--- Logger is Online! ---\n`)
});

client.on("message", msg => {
    if (msg.guild) { // Checks if the message was sent in a guild
        console.log('\n'); // clearing space for the next one
        console.log(`Guild: ${msg.guild.name.toString()}`); // printing the Guild name
        console.log(`Channel: ${msg.channel.name}`); // printing the Channel name the message was sent in
        console.log(`User: ${msg.author.username.toString()}`); // printing the messagers username
        console.log(`Message: ${msg.content.toString()}`);  // printing the message that was sent
        console.log('\n');
        // Inserting into the main_table table with the values needed
        db.exec(`INSERT INTO main_table (Guild,Channel,User,Message) VALUES("${msg.guild.name.toString()}", "${msg.channel.name}", "${msg.author.username.toString()}", "${msg.content.toString()}");`);
    } else return; // If not sent in a guild then return nothing
})

client.login(token); // Logging in as the User / Bot
