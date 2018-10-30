// require node.js modules
const Discord = require('discord.js');
const chalk = require('chalk');

//require json
const auth = require('./auth.json');

// 
const client = new Discord.Client();
const log = console.log;

client.on("ready", () => {
    log(chalk.green("Turning on..."));
})

client.login(auth.discord.token);