let handler = async (m, { conn }) => {
let memek = 'https://telegra.ph/file/7e73f1bf07a94a62f50c8.jpg'
let sig = 'https://www.instagram.com/m.rxcl_'
let numberowner = global.numberowner
let anu = `Hosting Terpercaya? SINI AJA
╭━━━━「 *SEWA BOTZ* 」
┊⫹⫺ PerBulan : 10k
┊⫹⫺ PerTahun : 75k
┊⫹⫺ Hemat : 3 Bulan = 25k
┊⬡ MAU REQ HARGA SEWA? BISAA                                                      
┊⬡ LANGGANAN 1 THN DPT APA? DPT DISKON PERMANEN 50%
╰═┅═━––––––๑
╭━━━━「 *JADI BOT* 」
┊⫹⫺ PerBulan : 10k
┊⫹⫺ PerTahun : 85k
┊⫹⫺ Hemat : 5 Bulan = 45k
┊⬡ MAU REQ HARGA JADIBOT? BISAA                                               
┊⬡ MAU PUNYA BOT SENDIRI TP GA MAU PUSING 
┊  MASALAH SERVER? DI SINI BISA !!
╰═┅═━––––––๑
 –––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner Saja
🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL
Masih Ga percaya? JOIN GC OFFICIAL
Ketik aja .gcbot
*⫹⫺ 🤓Contact person*
✦ http://wa.me/6283805685278 (Owner)
`
  conn.sendButton(m.chat, anu, sig, memek, [['DONASI', '.donasi'], ['OWNER', '.owner']], m)
}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium|belibot|sewabot)$/i

module.exports = handler
