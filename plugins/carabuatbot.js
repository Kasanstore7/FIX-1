let fs = require('fs')
let handler = async (m, { conn }) => {
let jarot = 'https://telegra.ph/file/b993bdac4ba1d327da3be.jpg'
let os = `┌─── 〔 TUTORIAL JADIBOT 〕 ───
✧.SILAHKAN KE BERANDA WHATSAPP 
✧.CARI TULISAN PERANGKAT TAUTAN 
✧.PENCET PERANGKAT TAUTAN 
✧.SILAHKAN MINTA KODE QR KE WA BOT
✧.KALO UDAH DAPET SILAHKAN SCAN
✧.TUNGGU SAMPAI PERANGKAT MASUK
✧.KALO UDAH MASUK KETIK LAGI JADIBOT
✧.CONNECT 

❍ TUTOR DAPETIN KODE QR ?? ❍

✘.JOIN GROUP BOT
https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
✘.JANGAN LUPA TAG OWNER
✘.BIAR DI ACC KALO UDAH DI ACC
✘.KETIK .jadibot DI NOMER BOT INI
✘.SILAHKAN SCAN  
✘.JANGAN LUPA DI BACA SEMUA
`
  conn.send3ButtonImg(m.chat, jarot, os, "📮 Silahkan pilih dibawah ini Dan Jangan Spam", 'Sosialmedia', '.sosialmedia', 'Sewa', '.sewa', 'Menu', '.menu', m) 
}
handler.help = ['tutorjdibot']
handler.tags = ['main']
handler.command = /^(tjd|tutorjdibot)$/i

module.exports = handler
