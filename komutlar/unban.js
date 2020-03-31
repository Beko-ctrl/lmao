 const Discord = require('discord.js')
exports.run = async (bot , message, args) => {

  if(!message.member.roles.has("692531096985796659") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed() .setDescription(`Bu Komutu Kullanmaya Yetkin Yok`).setColor("RANDOM")).then(msg => msg.delete(9000))

   const user = message.mentions.members.first()

    let member = user || args[0]
    
    const banlılar = await message.guild.fetchBans(true)
    
    const banlımember = banlılar.find(m => `${m.user.username}#${m.user.discriminator}` === member || m.user.id === member)
    
    let sebep = args.slice(1).join(' ');

    let kanal = bot.channels.get("692757020214034443")

    if(!banlımember) return message.reply("Lütfen Banı Açılcak Bir Kullanıcıyı Belirtin.")
   
    if(!sebep) sebep = "bir sebep belirtilmedi"

    try{
      
    message.channel.send(`**${banlımember.user}** Kullanıcısı **${message.author}** Tarafından **${sebep}** Nedeniyle banı kaldırıldı.`)
    message.guild.unban(banlımember.user)
   
    }catch(err){   
      console.log(err.message)
    }
   

     let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.guild.name} Bilgi`, message.guild.iconURL)
    .addField("**Banı Açan Üye:**", `**Adı:** ${message.author}\n **İD'si:** ${message.author.id}`)
    .addField("**Banı Açılma Nedeni:**", `${sebep}`)
    .addField("**Banı Açılan Üye:**", `**Adı:** ${banlımember.user.tag}\n **İD'si:** ${banlımember.user.id}`)
    .setTimestamp()
    .setFooter("Ban Bilgisi", `${banlımember.user.displayAvatarURL}`)
 
         if(!kanal || kanal === null) return
    kanal.send(embed)
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'kullanıcı yasağını kaldırır.',
  usage: 'unban'
};  