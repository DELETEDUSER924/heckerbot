// CHANGING THE CODE BELOW CAN RESULT IN THE BOT NOT WORKING
const REALLYMAXHEARINGREALLY1234REAL = 100
require('events').EventEmitter.prototype._maxListeners = REALLYMAXHEARINGREALLY1234REAL;
require('events').defaultMaxListeners = REALLYMAXHEARINGREALLY1234REAL;
// ONLY REMOVE THE ABOVE CODE IF YOU KNOW WHAT YOUE DOING
const { Client, ClientUser, MessageEmbed, Intents } = require('discord.js')
const { blacklisted } = require('../config/bot.json')
module.exports = async(client) => {
console.log('Making global command: emergencymeeting')
client.api.applications('947733660432490506').commands.post({
        data: {
            name: "emergencymeeting",
            description: "Among us emergency meeting"
 }})
  console.log('Created global command: emergencymeeting')
    client.ws.on("INTERACTION_CREATE", (interaction) => {
        const commandId = interaction.data.id;
        const commandName = interaction.data.name;
        
        if (commandName == "emergencymeeting") {
          if (blacklisted.includes(interaction.member.user.id)){
  return;
          }
          if (commandName == "emergencymeeting") console.log(`Slash command ${commandName} ran`);       
          if (commandName == "emergencymeeting") client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                      content: `ඞ Emergency meeting ඞ
                      
Discuss who is the imposter`
 }
       }
        });
        }
    });

};