

const discord = require('discord.js');
const bot = new discord.Client();
const antispam = require("better-discord-antispam");
const moment = require("moment");
const colors = require("colors");
const client = new discord.Client();
const { TOKEN, PREFIX, IGNOREDROLES } = require("./config.js");
bot.on('ready', () =>{
    console.log(`${bot.user.tag} ready ! go  !!!!!!.`)
 antispam(client, {
        limitUntilWarn: 2,
        limitUntilMuted: 4,
        interval: 3000,
        warningMessage: "Si tu veut spam fait attention",
        muteMessage: "Cet utilisateur à été mute pour spam !",
        maxDuplicatesWarning: 3,
        maxDuplicatesMute: 5,
        ignoredRoles: [IGNOREDROLES],
        ignoredMembers: [],
        mutedRole: "Muted",
        timeMuted: 1000 * 600,
        logChannel: "antispam-logs" 
      });
});
bot.on('message', msg => {
    if(msg.content.includes('discord.gg/') || msg.content.includes('https://discord.gg/')) return msg.delete()
});

bot.login(process.env.TOKEN);






 









