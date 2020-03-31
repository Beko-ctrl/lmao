const Discord = require('discord.js')
const db = require("quick.db")
const ms = require('parse-ms');

exports.run = async (bot , message, args) => {

  if(!message.member.roles.get("692531096985796659") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setDescription(`Bu Komutu Kullanmaya Yetkin Yok..`).setColor("RANDOM")).then(msg => msg.delete(4000))
    
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  
 if(!kullanıcı) return message.channel.send(new Discord.RichEmbed() .setDescription(` Banlanacak Kişiden Bahsetmeyi Unutmayınız..!`) .setColor("RANDOM")).then(m => m.delete(5000));
  
if (kullanıcı.id === "660900716386189332") return message.channel.send(new Discord.RichEmbed() .setDescription(`**Aynen Şuan Banladın Aq\nAynen Şuan Banladın Aq\nAynen Şuan Banladın Aq\nAynen Şuan Banladın Aq\nAynen Şuan Banladın Aq**`).setFooter("Bi Siz Zekisiniz Aq").setThumbnail("https://cdn.discordapp.com/attachments/692753812171259904/693883525908398090/Gif_185.gif")).then(m => m.delete(8000));
  
if (kullanıcı.hasPermission("ADMINISTRATOR")) return message.reply("Yöneticileri Banlayamazsın").then(m => m.delete(4000))
  let sebep = args.slice(1).join(' ');
   
  let sChannel = bot.channels.get("692757020214034443")
  
  if(message.author.id === kullanıcı.user.id) return message.reply("Kendini Banlayamazsın ").then(msg => msg.delete(4000))
   
  if(!sebep) return message.reply("Lütfen Neden Banladığınızı Belirtiniz.").then(msg => msg.delete(4000))
  
  db.add(`BanSayısı_${message.author.id}`,1)        
   
  let sayı = await db.fetch(`BanSayısı_${message.author.id}`)
   
let banlimiti = 3

let banaralıgı = 600000

  var tarih = Date.now() 

  if(sayı === 1){
    
   db.set(`Banmatarihi_${message.author.id}`,tarih)   
    
  }
let ilkbantarihi =  await db.fetch(`Banmatarihi_${message.author.id}`)
   
if(sayı>banlimiti && tarih-ilkbantarihi <=banaralıgı) {

var süre = ms((ilkbantarihi+banaralıgı)-tarih)

 if(süre.minutes !== 0){
   
     message.channel.send("Ban Atabilemek İçin **"+süre.minutes+" Dakika** Beklemelisin. ").then(m => m.delete(5000));
   return
   }
   if(süre.seconds !== 0){
     message.channel.send("Ban Atabilemek İçin **"+süre.seconds+" Saniye** Beklemelisin. ").then(m => m.delete(5000));
     return
   }
  return
}
  /// let banlimit = 3 kısmı'
  if(tarih-ilkbantarihi >=banaralıgı){
  
    db.set(`BanSayısı_${message.author.id}`,0)
 
    db.set(`Banmatarihi_${message.author.id}`,0) 
    
      let embed1 = new Discord.RichEmbed()
      .setColor('#f73737')
      .setDescription(kullanıcı.user+" Kullanıcısı "+message.guild.name+" Sunucusundan **"+sebep+"** Sebebiyle Yasaklandınız.")
   
      kullanıcı.send(embed1)

     let embed3 = new Discord.RichEmbed()
  .addField(`**Ban Bilgi**`, `**Banlayan : ** ${message.author}  (${message.author.id}) \n **Banlanan:** ${kullanıcı.user.tag}  (${kullanıcı.id})\n **Sebep :** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/640520341139226645/683058074558529570/Anime_Gif_6.gif')
         .setFooter(`**Adalet Mülkün Temelidir.**`)
        setTimeout(() => {
      message.guild.member(kullanıcı).ban(`${message.author.tag} | ${sebep}`).catch(err => message.reply("Banlama Yetkim Yok. ").then(m => m.delete(5000)))  
        },500)
          message.react('675019084634521630')
message.channel.send(embed3).then(m => m.delete(15000));
    
      db.add(`BanSayısı_${message.author.id}`,1)        
db.set(`Banmatarihi_${message.author.id}`,tarih)   
    
    let embed = new Discord.RichEmbed()
    .setColor('#f73737')
    .setDescription(kullanıcı.user+ " Kullanıcısı **"+sebep+"** Sebebiyle Yasaklanmıştır.")
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
    .setTimestamp()  
     if(!sChannel || sChannel === null) return
    sChannel.send(embed)
 
    return
 }
  
   let embed1 = new Discord.RichEmbed()
   .setColor('RANDOM')
  .setDescription(kullanıcı.user+" Kullanıcısı "+message.guild.name+" Sunucusundan **"+sebep+"** Sebebiyle Yasaklandınız.")
   kullanıcı.send(embed1)
  

   setTimeout(() => {
  message.guild.member(kullanıcı).ban(`${message.author.tag} | ${sebep}`).catch(err => message.reply("Banlama Yetkim Yok.").then(m => m.delete(5000)))  
   },500)
     message.react('675019084634521630')
     let embed3 = new Discord.RichEmbed()
  .addField(`**Ban Bilgi**`, `**Banlayan : ** ${message.author}  (${message.author.id}) \n **Banlanan:** ${kullanıcı.user.tag} (${kullanıcı.id})\n **Sebep :** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/640520341139226645/683058074558529570/Anime_Gif_6.gif')

    message.channel.send(embed3).then(m => m.delete(15000));
let embed = new Discord.RichEmbed()
   .setColor('#f73737')
   .setDescription(kullanıcı.user+ " Kullanıcısı **"+sebep+"** Sebebiyle Yasaklanmıştır.")
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
   if(!sChannel || sChannel === null) return
  sChannel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban","yak","yoket","adalet"],
  permLevel: 0
};

exports.help = {
  name: 'yargı',
  description: 'Kullanıcıyı sunucudan yasaklar.',
  usage: '&ban'
};
