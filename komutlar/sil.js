const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('`temizle` **komutu sadece sunucularda kullanılabilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (isNaN(args[0])) {
            message.reply("**Kaç mesaj sileceğimi belirtmedin.**").then(msg => msg.delete(4000))
            return
        }
        
        if (args[0].length > 400) {
            message.channel.send("** 400'den fazla mesaj silemem.**").then(msg => msg.delete(4000))
            return
        }
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**__' + mesajsayisi + '__ Adet Mesaj Temizlenmiş Bulunmaktadır ^^** <a:689143199306219524:692532381889855500>').then(msg => msg.delete(4000))
  message.react('625032575173263370')

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};