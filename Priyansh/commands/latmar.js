module.exports.config = {
  name: "latmar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Masti me lat mar punch reply with anime videos on challenge words",
  commandCategory: "fun",
  usages: "latmar",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const msg = event.body.toLowerCase();

  // सही spellings वाले trigger phrases
  const triggerWords = [
    "tera sir fod du",
    "tera hath tod du",
    "teri tang tod du",
    "tera gla dbadu",
    "tera sar fod",
    "tera sir tod",
    "lat maaru",
    "lat maar",
    "ghusa maar",
    "mar dunga",
    "tod dunga",
    "chod dunga",
  ];

  if (!triggerWords.some(word => msg.includes(word))) {
    return; // Trigger ना हो तो रिटर्न कर दे
  }

  const replies = [
    "😂 Tujhse pehle main fod dunga tera sir! Samjha?",
    "😎 Teri tang todne se pehle lat maarunga!",
    "💥 Gussa mat kar warna main hi tod dunga tujhe!",
    "🔥 Uth ja zameen se, warna main hi maarunga!",
    "👊 Lat maar ke dikhata hoon asli boss ka style!",
    "😤 Tujhse pehle main hi maar ke chillata hoon!",
    "🤜 Tere gla dabadu se pehle lat mar lunga!",
  ];

  // 20 Anime punch videos (2-4 सेकंड वाले छोटे धमाके)
  const animePunchVideos = [
    "https://i.imgur.com/6Hq3d7m.mp4",
    "https://i.imgur.com/TnAqx0W.mp4",
    "https://i.imgur.com/E9oDl5J.mp4",
    "https://i.imgur.com/FAtYxBS.mp4",
    "https://i.imgur.com/K6TJ6jV.mp4",
    "https://i.imgur.com/kRv2pEj.mp4",
    "https://i.imgur.com/4qXmUwP.mp4",
    "https://i.imgur.com/1JjpzDc.mp4",
    "https://i.imgur.com/j6F38FS.mp4",
    "https://i.imgur.com/Lw2a4Ir.mp4",
    "https://i.imgur.com/5qw8Pb0.mp4",
    "https://i.imgur.com/ZxNHR78.mp4",
    "https://i.imgur.com/ep2K6Fo.mp4",
    "https://i.imgur.com/Y4iQ1xE.mp4",
    "https://i.imgur.com/0YXhyxU.mp4",
    "https://i.imgur.com/d9ERHvx.mp4",
    "https://i.imgur.com/VIE2kwZ.mp4",
    "https://i.imgur.com/3MuBKwz.mp4",
    "https://i.imgur.com/fj4CEkl.mp4",
    "https://i.imgur.com/AyICdlJ.mp4"
  ];

  const randomReply = replies[Math.floor(Math.random() * replies.length)];
  const randomVideo = animePunchVideos[Math.floor(Math.random() * animePunchVideos.length)];

  return api.sendMessage({
    body: randomReply,
    attachment: await global.utils.getStreamFromURL(randomVideo)
  }, event.threadID, event.messageID);
};
