const Discord = require("discord.js")
exports.run = async (bot , message, args) => { 
if (!message.member.roles.has("459061842837372941") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setDescription(` Bu Komudu Kullanmak İçin Yetkin Yok`) .setColor("RANDOM")).then(m => m.delete(5000));

if (message.channel.overwritePermissions != false) {
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES:false
}).then(() => {
  message.channel.send(new Discord.RichEmbed() .setDescription(` Kanal Kilitlendi`) .setFooter(` Önemli Bir Şey Var Gaaliba?!?!`).setColor("RANDOM"))
});
}
};
exports.conf = {
guildOnly: true,
enabled:true,
aliases: ['kilitle','kilitcik','lock'],
permLevel: 0
}
exports.help = {
name: "kilit"
}