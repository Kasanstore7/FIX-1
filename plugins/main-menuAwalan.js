var handler = async (m, { 
conn 
}) => {
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Website Bot', url: 'https://bit.ly/SaxiaShop'}},
  {index: 2, callButton: {displayText: 'Contact Owner', phoneNumber: '6283805685278'}},
  {index: 3, quickReplyButton: {displayText: '『 ᴍᴇɴᴜ 』', id: '.menulist'}},
  {index: 4, quickReplyButton: {displayText: '『 ᴀʟʟ 』', id: '.? all'}},
]
let atas = `Hai Kak👋
❑ Saꭙࣼia˘Botz\n ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪʙᴜᴀᴛ ᴅᴇɴɢᴀɴ ɴᴏᴅᴇᴊs. 
ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴋʜᴜsᴜs ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ 
ᴀᴋᴛɪғɪᴛᴀs ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ sᴇᴘᴇʀᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ
ᴏᴛᴏᴍᴀᴛɪs, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ.
ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ 
ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ ᴀᴛᴀᴜ
ᴍᴇɴɢᴅᴏᴡɴʟᴏᴀᴅ sᴇsᴜᴀᴛᴜ.

☰Selain Itu Bot Juga bisa untuk Menjaga Group mu 24 Jam
klik button dibawah Dan jangan Spam!!`
var keiko = {
caption: atas,
image: { 
url: "https://telegra.ph/file/b993bdac4ba1d327da3be.jpg"},		
footer: '「 http://ẉ˘Saꭙࣼia.id 」',
templateButtons: templateButtons,
}
await conn.sendMessage(m.chat, keiko,m)
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.limit = 1

module.exports = handler
