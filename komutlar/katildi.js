const Discord = require("discord.js")
exports.run = async(client, message, args) => {
  
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(` Bi Sen Akıllısın Aq`)

message.guild.channels.get("692531206352273420").members.forEach(async (asd) => {
  asd.addRole("692531114861920337")
      })
message.channel.send(`Katildi Permi **<#692531206352273420>** Kanalındaki Herkese Veriliyor..`)
}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permlvl: 0
}
exports.help = {
name: "katildi"
}