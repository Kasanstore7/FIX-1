let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/31a705379b764fa20c5e5.png', m, { packname: "wa.me/6283111136642", author: "Saxia Botz\nig @m.rxcl_" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih|makasih|makaci|thx)$/i
handler.command = new RegExp

module.exports = handler
