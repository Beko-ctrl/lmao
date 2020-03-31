const Discord = require("discord.js")
exports.run = async (bot , message, args) => { 
if (!message.member.roles.has("459061842837372941") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setDescription(` Bu Komudu Kullanmak İçin Yetkin Yok`) .setColor("RANDOM")).then(m => m.delete(5000));

if (message.channel.overwritePermissions != null) {
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES:null
}).then(() => {
  message.channel.send(new Discord.RichEmbed() .setDescription(` Kanal Kilidi Açıldı`) .setFooter(`DEVAMKEEEEE`).setColor("RANDOM")).then(msg => msg.delete(9000))
});
}
};
exports.conf = {
guildOnly: true,
enabled:true,
aliases: ['kilitaç','kilitcikaç','unlock'],
permLevel: 0
}
exports.help = {
name: "kilitaç"
}