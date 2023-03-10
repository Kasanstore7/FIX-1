const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
 let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let handler = async (m, {conn}) => {
 let name = conn.getName(m.sender)
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: įÆ¤ ššš§š¤š© ššš
item.ORG: į“į“į“ į“Źį“į“©į“Ź Źį“į“
item1.TEL;waid=6283805685278:6283805685278@s.whatsapp.net
item1.X-ABLabel: į“į“į“ į“Źį“į“©į“Ź Źį“į“
// Nomer Owner Bot
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/f6557b4543456aff7b552.jpg'
await conn.send3ButtonImg(m.chat, jarot, `${ucapan()}\n\nHallo mypren, @${m.sender.split`@`[0]} š\nItu nomor owner Xia, jangan di spam ya Su\nOwner tak terima sv sv An\nCht yang gada berkaitan Dgn bot Owner Read\nJika penting langsung chat Owner\n\nā«¹ā«ŗ Date : *${week} ${date}*\nā«¹ā«ŗ Time : *${wib}*`, wm, 'Sewa', '.sewa', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "āāā² *SELAMAT DINIHARI* ā³"
  if (time >= 4) {
    res = "āāā² *SELAMAT PAGI* ā³"
  }
  if (time > 10) {
    res = "āāā² *SELAMAT SIANG* ā³"
  }
  if (time >= 15) {
    res = "āāā² *SELAMAT SORE* ā³"
  }
  if (time >= 18) {
    res = "āāā² *SELAMAT MALAM* ā³"
  }
  return res
}
