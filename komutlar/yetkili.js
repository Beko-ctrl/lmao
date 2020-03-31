const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
  let katildi = message.guild.roles.get("692531116992757870").members.size + message.guild.roles.get("692531095488692227").members.size;
  const onlayn = message.guild.roles.get("692531116992757870").members.filter(m => m.presence.status !== "offline").size + message.guild.roles.get("692531095488692227").members.filter(m => m.presence.status !== "offline").size ;
  let guild = "686837525439840277";
  if (!message.member.hasPermission("ADMINISTRATOR")) return
  client.premium_subscription_count == 0
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [, voiceChannel] of voiceChannels) { 
voiceChannel.members.filter(members =>
members.roles.has("692531116992757870"))
.forEach( () => count++)}
     var random = ['Eczanede Satılmalı Bence Yeni Rakı..','Kim Benim Düşmanım ? Kim Senin Dostun??','Sanki Siyah-Beyaz Ekrandaki Gök Kuşağı Benim..','Sahne Işıklarının Gidişi, Sokak Lambalarının Sönüşü, Son Bakışım..','Aslında , Çok Doldum.. Karşında Bu Gece Zor Durdum..','Güne Açan Çiçekler Gibiydin, Yalaaağnnn'
,'Ben Ölsem , Ölsem , Ölsem, Öldüm..','Herşeyi Gören Sen Beni Mi Göremedin..?','Sen Diye Kendimi Ben..','Bugün Her Yanımda İzler , Dökülen Saçımda Rüzgar..','Yazıp Yazıp Silme..','Nerenin Havası Bu Güzelim, Hint Kumaşı Mı Kalmış Şu Devirde?'];
  var randomla = Math.floor(Math.random() * random.length);
  //////////////////////////////////////////////////
 message.channel.send(new Discord.RichEmbed() .setDescription(` Toplam Yetkili Sayısı: **${katildi}**\n\n Toplam Aktif Yetkili Sayısı: **${count}**\n\n Sesli Kanallardaki Yetkili Sayısı: **${count}**`).setColor("RANDOM").setFooter(`${random[randomla]}`).setThumbnail(`https://media.discordapp.net/attachments/692531218071158844/692539356082339950/emojis.gif`))
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkilisay'
};