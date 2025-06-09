const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "bhutni",
  version: "1.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Female ghost scary replies with video",
  commandCategory: "fun",
  cooldowns: 5
};

const replies = [
  "💃 भूतनी आई और तुझे घूर रही है!",
  "👻 अब तेरी रातों की नींद उड़ गई!",
  "😈 भूतनी तेरे सपनों में आने वाली है!",
  "🧟‍♀️ देख पीछे... भूतनी खड़ी है!",
  "🌑 अब तेरा सामना भूतनी से होगा!",
  "💀 डर मत, ये तो बस शुरुआत है!",
  "🩸 भूतनी तेरा नाम ले रही है...",
  "🧙‍♀️ एक बार जो भूतनी देखे, फिर वापसी नहीं!",
  "🕸️ तेरे चारों ओर सन्नाटा क्यों है?",
  "👁️ देख... छाया चलती आ रही है!"
];

const media = [
  "https://i.imgur.com/NHd2xNV.mp4",
  "https://i.imgur.com/W6YciZm.mp4",
  "https://i.imgur.com/F2OErqQ.mp4",
  "https://i.imgur.com/ETZGTCV.mp4",
  "https://i.imgur.com/YW5tJfw.mp4",
  "https://i.imgur.com/oW1F7fi.mp4",
  "https://i.imgur.com/XVjZtQi.mp4",
  "https://i.imgur.com/3jLqzJh.mp4",
  "https://i.imgur.com/R3rq4vY.mp4",
  "https://i.imgur.com/5Rm8cRz.mp4"
];

function borderStyle(text) {
  const border = "═".repeat(text.length + 4);
  return `╔${border}╗\n║  ${text}  ║\n╚${border}╝`;
}

module.exports.run = async function({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggers = ["bhutni", "bhootni", "भूतनी"];
  if (!triggers.some(t => msg.includes(t))) return;

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const videoUrl = media[Math.floor(Math.random() * media.length)];
  const borderedText = borderStyle(reply);

  // Send text first
  api.sendMessage(borderedText, event.threadID, async () => {
    try {
      const res = await axios.get(videoUrl, { responseType: "stream" });
      const filePath = path.join(__dirname, "temp.mp4");
      const writer = fs.createWriteStream(filePath);
      res.data.pipe(writer);
      writer.on("finish", () => {
        api.sendMessage({
          body: "👻 भूतनी का साक्षात्कार!",
          attachment: fs.createReadStream(filePath)
        }, event.threadID, () => fs.unlinkSync(filePath));
      });
    } catch (e) {
      api.sendMessage("⚠️ वीडियो लोड करने में दिक्कत आई!", event.threadID);
    }
  });
};
