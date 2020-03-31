const Discord = require('discord.js');
const client = new Discord.Client()
const Client = new Discord.Client()
const xd = new Set();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const chalk = require('chalk');
const Jimp = require('jimp');
const db = require('quick.db');
const http = require('http');
const express = require('express');
const ms = require("parse-ms");
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');
client.queue = new Map()
const cezalılar = new Set();
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  })
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
    
client.elevation = message => {
  if (!message.guild) return;
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id == "457916671743492127") permlvl = 4;
  if (message.author.id == ayarlar.sahip) permlvl = 4;
  return permlvl;
};
client.on('messageUpdate', function(eskimsg, yenimsg) {
    let guild = eskimsg.guild
    let messageLog = eskimsg.guild.channels.find(c => c.name === "message-log")
    if (eskimsg.channel.type == "dm") return;
    if (eskimsg.author.bot) return;
    if (eskimsg.content.toLowerCase() == yenimsg.content.toLowerCase()) return;
    messageLog.send({
        embed: {
            description: eskimsg.channel + "Kalanındaki Yazı" + eskimsg.author + "Tarafından Değiştirildi" + "\n" + "\n" + "**Eski Mesaj: " + eskimsg.content + "**\n" + "\n" + "**Yeni Mesaj: " + yenimsg.content+ "\n**",
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            author: {
                name: eskimsg.author.tag,
                icon_url: eskimsg.author.avatarURL
            },
            thumbnail: {
                url: eskimsg.author.avatarURL
            },
            timestamp: new Date()
        }
    }).catch(console.error);
});
client.on('messageDelete', msg => {
    const enter =  msg.guild.fetchAuditLogs({type:"DELETE_MESSAGE"}).then(f => f.entries.first())
    const xd = enter.executor;
    let guild = msg.guild
    let messageLog = msg.guild.channels.find(c => c.name === "message-log")
    if (msg.channel.type == "dm") return;
    if (msg.author.bot) return;
    if (msg.attachments.first()) {
        messageLog.send({
            embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                image: {
                    url: msg.attachments.first().proxyURL
                },
                author: {
                    name: msg.author.tag,
                    icon_url: msg.author.avatarURL
                },
                description: msg.author + " tarafından oluşturulan mesaj " + msg.channel + " kanalında silindi.\n\n" + msg.content,
                timestamp: new Date()
            }
        }).catch(console.error);
    } else {
        messageLog.send({
            embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                author: {
                    name: msg.author.tag,
                    icon_url: msg.author.avatarURL
                },
                description: msg.author + " tarafından oluşturulan mesaj " + msg.channel + " kanalında silindi.\n\n" + msg.content,
                timestamp: new Date()
            }
        }).catch(console.error);
    }
});

client.on("userUpdate", async (old,nev) => {
if (old.username === nev.username) return;
let tag = "❅";
let sunucu = "692530619942436884";
let kanal = "692531218071158844";
let rol = "692531137834123315";
if (nev.username.includes(tag)){
if (old.username.includes(tag)) return;
await client.channels.get(kanal).send(new Discord.RichEmbed() .setDescription(`**<@${nev.id}> Görünüşe Göre Tag Almışsın Bu Nedenle <@&${rol}> Rolün Verildi.**`).setColor("BLACK").setFooter("Seni Seviyor Ve Aramızda Görmekten Mutluluk Duyuyoruz..").setTimestamp() .setThumbnail("https://cdn.discordapp.com/attachments/694527721048506439/694536546950316062/Gif_191.gif"))
client.guilds.get(sunucu).members.get(nev.id).addRole(rol).catch(console.error);
} else {
if (!old.username.includes(tag)) return;
await client.channels.get(kanal).send(new Discord.RichEmbed() .setDescription(`**<@${nev.id}> Görünüşe Göre Tagı Bırakmışsın Bu Sebeple <@&${rol}> Rolün Alındı...**`).setColor("BLACK").setFooter("Yetkililer, Lütfen El Atalım Tagı Geri Aldıralım..").setTimestamp() .setThumbnail("https://cdn.discordapp.com/attachments/694527721048506439/694536546950316062/Gif_191.gif"))
client.guilds.get(sunucu).members.get(nev.id).addRole(rol).catch(console.error);
}
});
client.on("guildMemberRemove", async uye => {
if (uye.roles.has("692531138434170970")){
cezalılar.add(uye.id)
}
});

client.on("message",async message => {
   if (message.author.bot || message.channel.type === "dm") return;
 
    var afklar =await db.fetch(`afk_${message.author.id}, ${message.guild.id}`)
    
  if(afklar){
    
    db.delete(`afk_${message.author.id}, ${message.guild.id}`)
    db.delete(`afk-zaman_${message.author.id}, ${message.guild.id}`)
    
    message.reply(`Artık afk değilsin. Tekrardan hoş geldin.`).then(msg => msg.delete(9000))
       try{
    let takma_ad = message.member.nickname.replace("[AFK]", "")
    message.member.setNickname(takma_ad).catch(err => console.log(err));
       }catch(err){   

 console.log(err.message)
  }
  }
  var kullanıcı = message.mentions.users.first()
  if(!kullanıcı) return
   let zaman =  await db.fetch(`afk-zaman_${kullanıcı.id}, ${message.guild.id}`)
  
   
    var süre = ms(Date.now() - zaman)
    
    
   var sebep = await db.fetch(`afk_${kullanıcı.id}, ${message.guild.id}`)
  if(await db.fetch(`afk_${message.mentions.users.first().id}, ${message.guild.id}`)){
  if(süre.days !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.days}** Gün **${süre.hours}** Saat **${süre.minutes}** Dakika Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  if(süre.hours !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.hours}** Saat **${süre.minutes}** Dakika **${süre.seconds}** Saniye **${süre.milliseconds}** Salise Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  if(süre.minutes !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.minutes}** Dakika **${süre.seconds}** Saniye **${süre.milliseconds}** Salise Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
   if(süre.seconds !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **Bir Kaç Saniye** Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  }
});
client.on("ready", () => {
const numbers = [
"<a:sifir:692749945442271312>",
"<a:bir:692748281314541679>",
"<a:iki:692748331155324929>",
"<a:uc:692748370434851217>",
"<a:dort:692748409047613540>",
"<a:bes:692748437216821318>",
"<a:alti:692748470158884875>",
"<a:yedi:692748506925891585>",
"<a:sekiz:692749821332815883>",
"<a:dokuz:692749896477835275>"
];
function numberToEmojis(number) {
let finalString = "";
String(number).split("").forEach(number => {
finalString += "" + numbers[Number(number)];
});
return finalString;
}
let guild = client.guilds.get("692530619942436884");
let onlayn = client.guilds.get("692530619942436884").members.filter(m => m.presence.status !== "offline").size;
setInterval(() => {client.channels.get("692531218071158844").setTopic(` Snowflake: ${numberToEmojis(guild.members.size)} Online: ${numberToEmojis(onlayn)}`);
}, 10000)
});
client.on("voiceStateUpdate", async(a,b) => {
if (a.voiceChannel == b.voiceChannel) return;
//if (a.id === "344014743377281025") return a.setVoiceChannel(null);
let vlog = a.guild.channels.find(c => c.name === "voice-log")
if (a.voiceChannel && !b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${a.voiceChannel} kanalından çıkış yaptı.`).setColor("BLACK")).catch(console.error);
if (!a.voiceChannel && b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${b.voiceChannel} kanalına giriş yaptı.`).setColor("#00125c")).catch(console.error);
if (a.voiceChannel !== b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${a.voiceChannel} kanalından ${b.voiceChannel} kanalına giriş yaptı.`).setColor("RANDOM")).catch(console.error);
});
process.on("uncaughtException", function (err) {
console.error(err);
});

client.on("guildMemberAdd", async uye => {
//if (uye.id === "582506360005066754") return uye.ban(7).then(cezalılar.add(uye.id))
if (uye.id === "310779453464772608") return uye.ban();
if (cezalılar.has(uye.id)){
uye.addRole("692531138434170970")
await cezalılar.delete(uye.id)
console.log("Hey! Başarılı..")
}
});
client.login(ayarlar.token);