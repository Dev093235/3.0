const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "bhoot",
  version: "1.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Male ghost scary replies with videos",
  commandCategory: "fun",
  cooldowns: 5
};

const replies = [
  "👻 तूने भूत का नाम लिया, अब छुप नहीं पाएगा! 💀",
  "💀 भूत का शिकार बनने वाला है तू!",
  "🕯️ भूत की दुनिया में तेरी एंट्री हो चुकी है!",
  "👹 डर जा! भूत तेरे पीछे है!",
  "😱 हवाओं में भूत की चीख़ सुन!",
  "👻 भूत तेरे खून में बस चुका है!",
  "🖤 तेरी रातें अब कभी शांत नहीं रहेंगी!",
  "🔥 भूतनी के साथ भूत भी तेरे पीछे!",
  "👽 अजीब साया तेरे साथ घूम रहा है!",
  "💨 हवा में भूत की खुशबू आ रही है!",
  "👁️‍🗨️ भूत तेरा पीछा नहीं छोड़ेंगे!",
  "☠️ तेरी रूह का भूत बन गया है!",
  "🧟‍♂️ भूत के क़दम तेरे घर तक आ चुके हैं!",
  "👿 अब तेरे सपनों में भी भूत आएगा!",
  "🌑 भूत की छाया तेरे आस-पास मंडराएगी!",
  "🕸️ भूत की जाल में फंस चुका है तू!",
  "🧛‍♂️ भूत का राज़ तेरे अंदर छुपा है!",
  "⚰️ कब्र से उठे भूत की दहशत!",
  "👹 भूत का गुस्सा अब तेरे सामने!",
  "💀 तेरे खून में भूत की आग जल रही है!"
];

const media = [
  "https://i.imgur.com/1b8d5YQ.mp4",
  "https://i.imgur.com/5Rm8cRz.mp4",
  "https://i.imgur.com/kGhZq6K.mp4",
  "https://i.imgur.com/gT0BjYF.mp4",
  "https://i.imgur.com/4sX6tC7.mp4",
  "https://i.imgur.com/Zv6dGRf.mp4",
  "https://i.imgur.com/W6YciZm.mp4",
  "https://i.imgur.com/qJfQciY.mp4",
  "https://i.imgur.com/NHd2xNV.mp4",
  "https://i.imgur.com/R3rq4vY.mp4"
];

function borderStyle1(text) {
  const border = "═".repeat(text.length + 4);
  return `╔${border}╗\n║  ${text}  ║\n╚${border}╝`;
}

async function getStreamFromURL(url) {
  const tempPath = path.join(__dirname, "temp_bhoot.mp4");
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);
    writer.on("finish", () => resolve(fs.createReadStream(tempPath)));
    writer.on("error", reject);
  });
}

module.exports.run = async function({ api, event }) {
  const msg = event.body?.toLowerCase();
  const triggers = ["bhoot", "bhut", "भूत"];
  if (!msg || !triggers.some(w => msg.includes(w))) return;

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const video = media[Math.floor(Math.random() * media.length)];
  const borderedReply = borderStyle1(reply);

  api.sendMessage(borderedReply, event.threadID, async () => {
    try {
      const stream = await getStreamFromURL(video);
      api.sendMessage({
        body: "👻 भूत का साक्षात्कार!",
        attachment: stream
      }, event.threadID);
    } catch (err) {
      api.sendMessage("❌ वीडियो भेजने में दिक्कत आ गई!", event.threadID);
    }
  });
};
