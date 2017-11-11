const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzc4Nzg1Nzk2OTYzOTU4ODA1.DOgjWA.0Vx8sFzGliDbWLz3PGwcjBzrw9g);
