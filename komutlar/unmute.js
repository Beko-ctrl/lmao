const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('692531116992757870') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Bu Komutu Kullanmak İçin Yetkin Yok..').setColor("RANDOM"));
  let kullanıcı = message.mentions.users.first()
 var random = ['Eczanede Satılmalı Bence Yeni Rakı..','Kim Benim Düşmanım ? Kim Senin Dostun??','Sanki Siyah-Beyaz Ekrandaki Gök Kuşağı Benim..','Sahne Işıklarının Gidişi, Sokak Lambalarının Sönüşü, Son Bakışım..','Aslında , Çok Doldum.. Karşında Bu Gece Zor Durdum..','Güne Açan Çiçekler Gibiydin, Yalaaağnnn'
,'Ben Ölsem , Ölsem , Ölsem, Öldüm..','Herşeyi Gören Sen Beni Mi Göremedin..?','Sen Diye Kendimi Ben..','Bugün Her Yanımda İzler , Dökülen Saçımda Rüzgar..','Yazıp Yazıp Silme..','Nerenin Havası Bu Güzelim, Hint Kumaşı Mı Kalmış Şu Devirde?'];
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir Üye Etiketlemelisin').setColor("RANDOM"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.removeRole('692531182482489445')
  
  var randomla = Math.floor(Math.random() * random.length);
  const kanal = message.guild.channels.find(c => c.id == "692757535907774516")
  let embed = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(` ${kullanıcı} Adlı Kullanıcının Mutesi Kaldırıldı..`)
  .setFooter(`${random[randomla]}`)
  .setTimestamp()
  
      const embed1 = new Discord.RichEmbed()
  .setTitle(`Risus Unmute Log`)
  .addField("Mutesi Kaldırılan Kişi:" , kullanıcı.tag ,true)
  .addField("Muteyi Kaldıran Kişi:", message.author.tag, true)
  .setFooter(`Mute Bilgilendirme: Bügün Saat ${message.createdAt.getHours()+3}:${message.createdAt.getMinutes()}`, `${client.user.displayAvatarURL}`)
  .setThumbnail(message.author.avatarURL)
  .setColor("0004ac")
    
  return message.channel.send(embed).then(kanal.send(embed1))
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'unmute',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}