module.exports.config = {
  name: "latmar",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Anime-style lat punches with reply and video",
  commandCategory: "fun",
  usages: "latmar",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggerWords = [
    "tera sir fod du", "tera hath tod du", "teri tang tod du",
    "tera gla dbadu", "lat maar", "ghusa maar", "mar dunga",
    "tod dunga", "radha", "राधा"
  ];
  if (!triggerWords.some(word => msg.includes(word))) return;

  const replies = [
    "👊 तू बोले, मैं फोड़ दूँ!",
    "💥 तेरे जैसे रोज आते हैं... उड़ गया!",
    "😤 बहस? चल एक घूसा खा!",
    "🔥 Goku भी इतना गुस्सा नहीं करता!",
    "😆 Ye lo... special anime lat!",
    "🥵 Main lat se nahi, Rasengan se kaam karta hoon!",
    "💢 Lagta hai fight ka mood hai?",
    "😏 Tu janta nahi main Rudra mode pe hoon!",
    "😎 Lat se nahi, combo से उड़ाता हूँ!",
    "😲 अब बच नहीं पाएगा...",
    "🎯 Target lock... Punch deployed!",
    "😂 इतनी जल्दी रो पड़ा?",
    "🌀 Itna हल्का था तू, हवा में उड़ गया!",
    "🕶️ Tu kis zone me hai bhai?",
    "💀 RIP logic – ye to anime duniya hai!",
    "⚡ Dekh... speed lightning jaisi hai!",
    "👽 Alien bhi darte hai meri lat se!",
    "😬 Tu Radha bola, galti कर दी!",
    "🥷 Kick maar ke memory reset!",
    "🚀 जा बेटा... सीधा दूसरे anime में!"
  ];

  const punchVideos = [
    "https://i.imgur.com/TnAqx0W.mp4", "https://i.imgur.com/6Hq3d7m.mp4",
    "https://i.imgur.com/3MuBKwz.mp4", "https://i.imgur.com/VIE2kwZ.mp4",
    "https://i.imgur.com/Y4iQ1xE.mp4", "https://i.imgur.com/FAtYxBS.mp4",
    "https://i.imgur.com/E9oDl5J.mp4", "https://i.imgur.com/AyICdlJ.mp4",
    "https://i.imgur.com/d9ERHvx.mp4", "https://i.imgur.com/ep2K6Fo.mp4",
    "https://i.imgur.com/j6F38FS.mp4", "https://i.imgur.com/0YXhyxU.mp4",
    "https://i.imgur.com/ZxNHR78.mp4", "https://i.imgur.com/kRv2pEj.mp4",
    "https://i.imgur.com/4qXmUwP.mp4", "https://i.imgur.com/Lw2a4Ir.mp4",
    "https://i.imgur.com/K6TJ6jV.mp4", "https://i.imgur.com/fj4CEkl.mp4",
    "https://i.imgur.com/1JjpzDc.mp4", "https://i.imgur.com/5qw8Pb0.mp4"
  ];

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const video = punchVideos[Math.floor(Math.random() * punchVideos.length)];

  api.sendMessage(reply, event.threadID, () => {
    setTimeout(() => {
      api.sendMessage({
        body: "👊 ले एक anime वाली lat!",
        attachment: global.utils.getStreamFromURL(video)
      }, event.threadID, event.messageID);
    }, 1500);
  });
};
