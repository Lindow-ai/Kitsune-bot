require("dotenv").config();
const { Client } = require('discord.js');

const client = new Client({ intents: 1 });

client.once('ready', () => {
    console.log('Je suis prêt');
});

client.login(process.env.DISCORD_TOKEN);