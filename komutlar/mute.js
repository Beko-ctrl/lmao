const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.find("id", "692531116992757870") && !message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(new Discord.RichEmbed().setTitle("Muted").setColor("RED").setDescription(new Discord.RichEmbed() .setDescription(`Bu Komutu Kullanmak İçin Yetkin Yok`).setColor("RANDOM"))).then(msg => msg.delete(5000));
  
  let mutekisi = message.guild.member(
    message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  );
  if (!mutekisi) return message.channel.send(new Discord.RichEmbed() .setDescription(`Bir Üye Etiketlemelisin.`) .setColor("RANDOM")).then(m => m.delete(5000))
  let muterol = message.guild.roles.get("692531182482489445")
  if (!muterol) {
    try {
      muterol = await message.guild.createRole({
        name: "Muted",
        color: "#232dff",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
    .replace(`s`, `s`)
    .replace(`m`, `m`)
    .replace(`h`, `h`)
    .replace(`d`, `d`);
let guild = message.guild;
  let reason = args.slice(2).join(" ");
  const member = message.guild.member(mutekisi);
  if (reason.length < 1)
    return message.channel.send(new Discord.RichEmbed().setTitle("Snowflake Mute Log").setColor("RED").setDescription("** Mute sebebini girermisin** ")).then(m => m.delete(5000));
  if (message.mentions.users.size < 1)
    return message.channel.send(new Discord.RichEmbed().setTitle("Snowflake Mute Log").setColor("RED").setDescription("** Kime mute atacağını yazarmısın** ")).then(m => m.delete(5000)).catch(console.error);
  if (member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(new Discord.RichEmbed().setTitle("Snowflake Mute Log").setColor("RED").setDescription("** Yönetici bir kişiyi muteleyemessin** ")).then(msg => {msg.delete(9000), message.delete(9000);
    });
    if (!mutezaman) return message.channel.send(new Discord.RichEmbed() .setDescription(`Lütfen Doğru Bi Zaman Dilimi Gir..`).setColor("RANDOM")).then(m => m.delete(5000));
  await mutekisi.addRole(muterol.id);
  message.channel.send(new Discord.RichEmbed().setTitle(``,new Discord.RichEmbed).setTitle("Snowflake Mute").setColor("AQUA").setDescription(`<@${mutekisi.id}> kullanıcısı __**"${args[1]}"**__ süresi boyunca __${reason}__ sebebiyle **Mutelendi**.`));
  mutekisi.send(new Discord.RichEmbed().setTitle("Snowflake Mute").setColor("AQUA").setDescription(`**Snowflake** adlı Sunucuda __**"${args[1]}"**__ süresi boyunca __${reason}__ sebebiyle **"Mutelendiniz"**.`));
  
  const sChannel = message.guild.channels.find(c => c.id === "692757535907774516");
  let modlog = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Snowflake Mute Log")
    .setDescription(`<@${mutekisi.id}> adlı kişi Mutelendi \n Muteleyen Yetkili: **${message.author.username}#${message.author.discriminator}** \n Sebebi : **"${reason}"** \n Zamanı : __**"${args[1]}"**__ `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`);
  sChannel.send(modlog);
setTimeout(function() {
    mutekisi.removeRole(muterol.id);
    mutekisi.send(`Snowflake adlı sunucudaki **"Mute"** Süreniz sona ermiştir.`);
    const sChannel = message.guild.channels.find(c => c.id === "692757535907774516");
    let modlog = new Discord.RichEmbed()
      .setColor("RED")
       .setTitle("Snowflake Mute Log")
      .setDescription(`<@${mutekisi.id}> adlı Kullanıcının "Mute" süresi doldu.`)
        .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`);
    sChannel.send(modlog);
  }, ms(mutezaman));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sustur"],
  permLevel: 0
};
exports.help = {
  name: "mute"
};