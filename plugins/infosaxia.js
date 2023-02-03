let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI DEVLOPER* ´ˎ˗
│ ✎ _Nama_ : Marcell
│ ✎ _Hobi_ : Belajar Bahasa Pemograman
│ ✎ _Umur_ : Belasan,
│ ✎ _Asal_ : Jawa Timur, Madiun
│ ✎ _Status_ : Pelajar 
┗━━═┅═━━––––––––––✦
│ ↬ _Group Official_ :
│    https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
│ ↬ _Group Random Gwa_ :
│    https://chat.whatsapp.com/EUexY1yhxAB6wjD9ZP6MOU
│ ↬ _Panel Murah_ :
│    https://wa.me/6289519269447
❖––––『 Sosial Media 』––––❖
│ 𖤍 _Instagram_ : 
│    instagram.com/m.rxcl_
│ 𖤍 _WhatsApp_ :
│    wa.me/6283805685278
│ 𖤍 _Website_ :
│   https://bit.ly/SaxiaShop
╰───────────────────๑
📮http://ẉ˘Saꭙࣼia.id
https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
`.trim(), m)
}

handler.help = ['infodev']
handler.tags = ['main', 'utama']
handler.command = /^(infodev)$/i

handler.exp = 150

module.exports = handler
