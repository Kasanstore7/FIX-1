let handler = async (m, { conn, text, usedPrefix, command }) => {
let fetch = require("node-fetch")
let tio = 'ʜᴀʏᴏ ʙᴀɴɢ ɢᴀʙᴏʟᴇʜ ɢɪᴛᴜ'
 await conn.sendFile(m.chat, 'https://database.tioclkp02.repl.co/Dengarkanlah.mp3', 'Dengarkanlah.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://www.instagram.com/m.rxcl_', thumbnail: await (await fetch('https://telegra.ph/file/7c71907225f33f3ba5eb6.jpg')).buffer()}} 
     })

}

handler.customPrefix = /^(crot|ahah|ah|crit|anjir|ange|prot|cortttt|anjing|lonte|kontol|memek|bangsat|bngst|sial|asu|bajingan|tempek|jembut|entod|ngentod|perkosa|sange|horny|eregsi|tetek|tete|dada|paha|)$/i
handler.command = new RegExp

module.exports = handler
