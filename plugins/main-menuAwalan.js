var handler = async (m, { 
conn 
}) => {
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Script Bot', url: 'https://github.com/Kasanstore7'}},
  {index: 2, callButton: {displayText: 'Contact Owner', phoneNumber: '911'}},
  {index: 3, quickReplyButton: {displayText: 'menu', id: '.menu1'}},
  {index: 4, quickReplyButton: {displayText: '.ping', id: ''}},
]
let atas = `Hai Kak👋

klik button dibawah ya kak`
var keiko = {
caption: atas,
image: { 
url: "https://telegra.ph/file/f972f2fab76e9c1c8d762.jpg"},		
footer: 'Botwa0',
templateButtons: templateButtons,
}
await conn.sendMessage(m.chat, keiko,m)
}
handler.help = ['sc','sourcecode']
handler.tags = ['info']
handler.command = /^(menu|help)$/i 
handler.limit = 1

module.exports = handler
