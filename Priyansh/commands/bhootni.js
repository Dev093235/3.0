const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "bhootni",
  version: "3.7",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Bhoot ya Bhootni wali image aur message bhejta hai",
  commandCategory: "fun",
  usages: "bhootni | bhoot",
  cooldowns: 5
};

const femaleReplies = [
  "😨 Bhutni aayi aur seedha aankhon me dekh rahi hai!",
  "👻 Bhutni tere bed ke neeche chup ke baithi hai!",
  "💃 Bhutni bole – aaj raat sirf main aur tu!",
  "🩸 Sapna nahi, asli bhutni aayi hai!",
  "🌑 Bhutni ka mood kharab hai... sambhal ja!"
];

const maleReplies = [
  "☠️ Bhai bhag! Bhoot saamne khada hai!",
  "🧟‍♂️ Bhoot bola – teri band bajane aaya hoon!",
  "👁️‍🗨️ Uski aankhon mein dekha kya? Bhoot tha wo!",
  "👻 Raat ke 3 baje... aur bhoot ne tujhe yaad kiya!",
  "🕷️ Bhoot ne kaha – game over, beta!"
];

const femaleImages = [
  "https://i.imgur.com/1hrTkfK.jpg",
  "https://i.imgur.com/FDS9zW0.jpg",
  "https://i.imgur.com/h4NSjRo.jpg",
  "https://i.imgur.com/Ay8y2no.jpg",
  "https://i.imgur.com/OLpWJmZ.jpg"
];

const maleImages = [
  "https://i.imgur.com/N10qg3m.jpg",
  "https://i.imgur.com/Db3EfrB.jpg",
  "https://i.imgur.com/pmdscfG.jpg",
  "https://i.imgur.com/XnGZHKq.jpg",
  "https://i.imgur.com/LWfgopg.jpg"
];

function borderStyle(text) {
  const border = "═".repeat(text.length + 4);
  return `╔${border}╗\n║  ${text}  ║\n╚${border}╝`;
}

module.exports.handleEvent = async function ({ api, event }) {
  const msg = event.body?.toLowerCase();
  if (!msg) return;

  const isFemale = ["bhutni", "bhootni", "भूतनी"].some(t => msg.includes(t));
  const isMale = ["bhoot", "bhuut", "भूत"].some(t => msg.includes(t));

  if (!isFemale && !isMale) return;

  const reply = isFemale
    ? femaleReplies[Math.floor(Math.random() * femaleReplies.length)]
    : maleReplies[Math.floor(Math.random() * maleReplies.length)];

  const imageUrl = isFemale
    ? femaleImages[Math.floor(Math.random() * femaleImages.length)]
    : maleImages[Math.floor(Math.random() * maleImages.length)];

  const borderedText = borderStyle(reply);
  const tempPath = path.join(__dirname, `ghost_temp_${Date.now()}.jpg`);

  try {
    const res = await axios.get(imageUrl, { responseType: "stream" });
    const writer = fs.createWriteStream(tempPath);
    res.data.pipe(writer);
    writer.on("finish", () => {
      api.sendMessage(borderedText, event.threadID, () => {
        api.sendMessage({
          body: isFemale
            ? "👻 Bhutni ki entry ho chuki hai!"
            : "💀 Bhoot ab tera peecha nahi chhodega!",
          attachment: fs.createReadStream(tempPath)
        }, event.threadID, () => fs.unlinkSync(tempPath));
      });
    });
  } catch (e) {
    console.error(e);
    api.sendMessage("❌ Bhai dikkat aa gayi image bhejne me! 😭", event.threadID);
  }
};

module.exports.run = async function ({ api, event }) {
  event.body = event.body || "";
  return this.handleEvent({ api, event });
};
