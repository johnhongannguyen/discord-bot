// Initialize dotenv
require('dotenv').config(); 

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ 
    intents: 
    [   GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ] });

// 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Log in 
client.login(process.env.CLIENT_TOKEN);

const messageContent = [
   'hi','hello'
]
client.on('messageCreate', msg => {
  if (msg.content === messageContent[0]) {
    msg.reply(`Hello ${msg.author.username}, 
    how are you today ${msg.author.username}, how can I help you`);
  }
});