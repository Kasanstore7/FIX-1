let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f0b1c19aca4215ffb4ac7.jpg', m, { packname: "wa.me/6283111136642", author: "Saxia Botz\nig @m.rxcl_" })
}

handler.customPrefix = /^(ok|okey|otey|okeh)$/i
handler.command = new RegExp

module.exports = handler
