let handler = async (m, { conn }) => {
let memek = 'https://telegra.ph/file/551d0ce8a3d0736af1770.jpg'
let sig = 'https://www.instagram.com/m.rxcl_'
let numberowner = global.numberowner
let anu = `Hamllo Banh
┏──「 *Donasi Orang Baik* 」─⬣
│ • Seikhlas nya saja
│ • All Peyment
┗────────⬣
┏──「 *NOTE* 」─⬣
│ SeikhlaSny aja klo bisa 
│ Klo bisa 10k :v
│ Pencet Doang di perkaos owner
│ pencet donasi doang ga donasi
┗────────⬣
⬡ Rasulullah bersabda dalam hadist riwayat Baihaqi, “Turunkanlah 
(datangkanlah) rezekimu (dari Allah) dengan mengeluarkan sedekah.” 
Diriwayatkan juga dalam hadist riwayat Muslim, “Hai anak Adam, 
infaklah (nafkahkanlah hartamu), niscaya Aku memberikan nafkah kepadamu

⬡ Contact person:
wa.me/${numberowner} (Owner)

`
  conn.sendButton(m.chat, anu, sig, memek, [['Menu', '.menu'], ['SewaBot', '.sewabot']], m)
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
