const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "bhutni",
  version: "1.2",
  hasPermssion: 0,
  credits: "Rudra",
  description: "भूतनी की वीडियो और डरावनी बात",
  commandCategory: "fun",
  cooldowns: 5
};

const replies = [
  "💃 भूतनी आई और तुझे घूर रही है!",
  "👻 अब तेरी रातों की नींद उड़ गई!",
  "😈 भूतनी तेरे सपनों में आने वाली है!",
  "🧟‍♀️ देख पीछे... भूतनी खड़ी है!",
  "🌑 अब तेरा सामना भूतनी से होगा!",
  "🕯️ भूतनी की सांसें तेरे कानों में गूंज रही हैं!",
  "💀 तुझे भूतनी पसंद है ना? अब भुगत!",
  "👁️‍🗨️ भूतनी तेरे दिमाग में बैठ गई!",
  "🔮 रात को खिड़की मत खोलना... भूतनी झाँकेगी!",
  "🕷️ धीरे बोल... भूतनी सुन रही है!",
  "😨 तेरी चीख अब सिर्फ भूतनी को सुनाई देगी!",
  "🖤 अब तेरा पीछा नहीं छोड़ेगी वो!",
  "👹 साया उसका तेरे साथ आ गया है!",
  "🔥 तू जलेगा उसकी नज़र से!",
  "⚰️ तेरी रूह अब उसके कब्ज़े में है!",
  "🦴 डर का दूसरा नाम है भूतनी!",
  "🔪 तेरे पीछे कोई चल रहा है... देख!",
  "👣 वो हर कदम पे तेरे साथ है!",
  "🌪️ भूतनी का तूफ़ान आया है!",
  "😱 अब तेरा बचना नामुमकिन है!"
];

const media = [
  "https://i.imgur.com/3jLqzJh.mp4",
  "https://i.imgur.com/F2OErqQ.mp4",
  "https://i.imgur.com/W6YciZm.mp4",
  "https://i.imgur.com/Zv6dGRf.mp4",
  "https://i.imgur.com/kGhZq6K.mp4",
  "https://i.imgur.com/oW1F7fi.mp4",
  "https://i.imgur.com/5Rm8cRz.mp4",
  "https://i.imgur.com/YW5tJfw.mp4",
  "https://i.imgur.com/ETZGTCV.mp4",
  "https://i.imgur.com/XVjZtQi.mp4",
  "https://i.imgur.com/9GO9fXk.mp4"
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

  const tempPath = path.join(__dirname, `bhutni_temp_${Date.now()}.mp4`);

  try {
    const res = await axios.get(videoUrl, { responseType: "stream" });
    const writer = fs.createWriteStream(tempPath);
    res.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage(borderedText, event.threadID, () => {
        api.sendMessage({
          body: "👻 भूतनी की एंट्री हो चुकी है!",
          attachment: fs.createReadStream(tempPath)
        }, event.threadID, () => fs.unlinkSync(tempPath));
      });
    });

    writer.on("error", () => {
      api.sendMessage("❌ वीडियो सेव नहीं हो सकी! 😢", event.threadID);
    });
  } catch (err) {
    console.error(err);
    api.sendMessage("❌ वीडियो भेजने में दिक्कत आ गई! 😭", event.threadID);
  }
};
