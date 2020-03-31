const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
  let guild = "692530619942436884";
  client.premium_subscription_count == 0
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
       var random = ['Eczanede Satılmalı Bence Yeni Rakı..','Kim Benim Düşmanım ? Kim Senin Dostun??','Sanki Siyah-Beyaz Ekrandaki Gök Kuşağı Benim..','Sahne Işıklarının Gidişi, Sokak Lambalarının Sönüşü, Son Bakışım..','Aslında , Çok Doldum.. Karşında Bu Gece Zor Durdum..','Güne Açan Çiçekler Gibiydin, Yalaaağnnn'
,'Ben Ölsem , Ölsem , Ölsem, Öldüm..','Herşeyi Gören Sen Beni Mi Göremedin..?','Sen Diye Kendimi Ben..','Bugün Her Yanımda İzler , Dökülen Saçımda Rüzgar..','Yazıp Yazıp Silme..','Nerenin Havası Bu Güzelim, Hint Kumaşı Mı Kalmış Şu Devirde?'];
  var randomla = Math.floor(Math.random() * random.length);
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "1": "<a:bir:692748281314541679>",
        "2": "<a:iki:692748331155324929>",
        "3": "<a:uc:692748370434851217>",
        "4": "<a:dort:692748409047613540>",
        "5": "<a:bes:692748437216821318>",
        "6": "<a:alti:692748470158884875>",
        "7": "<a:yedi:692748506925891585>",
        "8": "<a:sekiz:692749821332815883>",
        "9": "<a:dokuz:692749896477835275>",
        "0": "<a:sifir:692749945442271312>"}[d];
      })
    }
  /////////////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
        "1": "<a:bir:692748281314541679>",
        "2": "<a:iki:692748331155324929>",
        "3": "<a:uc:692748370434851217>",
        "4": "<a:dort:692748409047613540>",
        "5": "<a:bes:692748437216821318>",
        "6": "<a:alti:692748470158884875>",
        "7": "<a:yedi:692748506925891585>",
        "8": "<a:sekiz:692749821332815883>",
        "9": "<a:dokuz:692749896477835275>",
        "0": "<a:sifir:692749945442271312>"}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "❅";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
     return {
        "1": "<a:bir:692748281314541679>",
        "2": "<a:iki:692748331155324929>",
        "3": "<a:uc:692748370434851217>",
        "4": "<a:dort:692748409047613540>",
        "5": "<a:bes:692748437216821318>",
        "6": "<a:alti:692748470158884875>",
        "7": "<a:yedi:692748506925891585>",
        "8": "<a:sekiz:692749821332815883>",
        "9": "<a:dokuz:692749896477835275>",
        "0": "<a:sifir:692749945442271312>"}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
     return {
        "1": "<a:bir:692748281314541679>",
        "2": "<a:iki:692748331155324929>",
        "3": "<a:uc:692748370434851217>",
        "4": "<a:dort:692748409047613540>",
        "5": "<a:bes:692748437216821318>",
        "6": "<a:alti:692748470158884875>",
        "7": "<a:yedi:692748506925891585>",
        "8": "<a:sekiz:692749821332815883>",
        "9": "<a:dokuz:692749896477835275>",
        "0": "<a:sifir:692749945442271312>"}[d];
      })
    }
  //////////////////////////////////////////////////
msg.delete()
  ////////////////////////////////////////////////////////////
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(stripIndents`
 ** __Sunucuda Bulunan Üye sayısı__: _${üyesayısı.toString()}_

    __Ses Kanallarındaki Aktif Sayısı__: _${sessayı}_

  __Tagımızda Bulunan Kişi Sayısı__: _${tagdakilerr}_

  __Sunucuda Bulunan Aktif Üye Sayısı__: _${onlayn}_
  ** `)
.setThumbnail(`https://media.discordapp.net/attachments/692531218071158844/692539356082339950/emojis.gif`)
  .setFooter(`${random[randomla]}`)
  .setAuthor(msg.guild.name, msg.guild.iconURL)
msg.channel.send(embed).then(m => m.delete(5000))
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Say","yeniemojilisaysistemi"],
  permLevel: 0
};

exports.help = {
  name: 'say'
};