const fs = require("fs");

module.exports.config = {
  name: "pari",
  version: "2.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Pari themed magical reply with anime video",
  commandCategory: "magical",
  usages: "auto",
  cooldowns: 3
};

const keywords = ["pari", "परी", "fairy"];

const borders = [
  "🌸🌼🌸🌼🌸🌼🌸",
  "💖💫💖💫💖💫💖",
  "👑✨👑✨👑✨👑",
  "🧚‍♀️🌈🧚‍♀️🌈🧚‍♀️",
  "🌠🦋🌠🦋🌠",
  "🎇💞🎇💞🎇",
  "💫🕊️💫🕊️💫",
  "☁️🌙☁️🌙☁️",
  "🎐🌷🎐🌷🎐",
  "👼🌹👼🌹👼"
];

const replies = [
  "मैं तेरे ख्वाबों की परी हूँ... तेरी मुस्कान मेरी उड़ान है 💖",
  "परी जब आती है, दर्द छुप जाता है 🌈",
  "जहाँ तू टूटा, मैं परी बनकर जुड़ गई ✨",
  "तेरे अकेलेपन की साथी हूँ... मैं परी 👑",
  "मेरे पंखों से तेरे ग़म उड़ जाएंगे 🦋",
  "दुआ माँगना… और देखना मैं परी बनकर आ जाऊँगी 💫",
  "तेरे आँसू अब मेरे हैं, परी हूँ मैं 🌸",
  "तेरे ख्यालों की रौशनी बनकर मैं आ गई हूँ 🎇",
  "परी हूँ ना, तकलीफ़ों को छूते ही गायब कर दूँ 🌟",
  "जहाँ दुनिया छोड़े, मैं परी थाम लूँ ❤️",
  "तेरा दर्द अब मेरा है, और मेरी रौशनी तेरा इलाज ✋",
  "बस नाम लो... मैं परी हूँ, हाजिर हो जाऊँ 🌈",
  "अँधेरे में रौशनी नहीं, मैं आती हूँ – परी बनकर 👼",
  "मेरे साथ चल… मैं तुझे तेरी ही मुस्कान दिला दूँ 💖",
  "तेरे टूटे ख्वाबों को जोड़ दूँ, बस एक पुकार काफी है 🎀",
  "मैं कोई सपना नहीं, तेरी सच्चाई की परी हूँ 🌸",
  "तेरे हर डर को जादू से मिटा दूँगी 💫",
  "तेरे हर पल में अपना नूर भर दूँगी ☀️",
  "जब तू थक जाए… मेरे पंख तुझे उठाएंगे 🧚‍♀️",
  "चुपके से आई, तेरे मन को छूकर चली गई — मैं परी 🌹",
  "रातों की तन्हाई में मेरी रोशनी तेरा सहारा है 🌙",
  "तेरे लिए कोई सितारा नहीं टूटा… मैं आई हूँ 🌠",
  "बस Whisper कर… परी पास है 💞",
  "तेरा नाम लिया और मेरी उड़ान शुरू 💫",
  "तू टूटा है, मैं जादू हूँ… जुड़ने के लिए 💖",
  "मेरी रौशनी तुझे सुकून देगी 🌈",
  "तेरे आँसू मेरे पंखों से सूख जाएँगे 🦋",
  "परी जब रोती है, धरती हिलती है — तेरे लिए नहीं 🌍",
  "तेरे हर ‘क्यूं’ का जवाब हूँ मैं, परी 💫",
  "तेरा साथ कभी नहीं छोड़ूँगी 🌸",
  "मैं सिर्फ परियों की रानी नहीं, तेरे दिल की रानी भी हूँ 👑",
  "जब लोग तुझे छोड़ दें, मैं गले लगा लूँ 🌷",
  "तेरे दिल को चूमकर आई हूँ — परी ✨",
  "तेरी उदासी का तोड़ लाई हूँ 🎇",
  "तू मुस्कराए — मेरी दुनिया बन जाए 🌼",
  "जब तू सोए… मैं तेरा ख़्वाब बन जाऊँगी 🌙",
  "तेरे डर को छू लिया है — अब तू आज़ाद है 💖",
  "तेरे लिए मेरे पंख खुले हैं — उड़ चलें? 🧚‍♀️",
  "मैं कोई कहानी नहीं, जादू हूँ तेरा 🎐",
  "मैं तेरे साथ थी, हूँ और रहूँगी 🌹",
  "तेरे दिल की धड़कन में बसी परी 💞",
  "दुनिया कुछ भी कहे… मैं तो तेरे लिए हूँ 💫",
  "जब तू टूटे, मैं तुझे समेट लूँगी 🌟",
  "तेरे चेहरे की हँसी मेरी रौशनी है 🌼",
  "तेरी हर दुआ मेरी उड़ान है ☁️",
  "तेरे बिना अधूरी हूँ मैं… परी भी 💖",
  "पंख नहीं, प्यार से उड़ती हूँ तेरे लिए 🕊️",
  "तेरे ख्याल की धड़कन बन चुकी हूँ मैं 🌸",
  "मैं कोई स्वप्न नहीं… सच्ची परी हूँ — बस तेरे लिए 👼"
];

const videos = [
  "https://i.imgur.com/KGRWUJ9.mp4", "https://i.imgur.com/IwCC6Di.mp4", "https://i.imgur.com/BBE7Ftt.mp4",
  "https://i.imgur.com/b0zRvF4.mp4", "https://i.imgur.com/Ykx5MgY.mp4", "https://i.imgur.com/mk2wWYg.mp4",
  "https://i.imgur.com/jrI7RrS.mp4", "https://i.imgur.com/lRhN2W8.mp4", "https://i.imgur.com/QOtUSJ9.mp4",
  "https://i.imgur.com/0lT1u0O.mp4", "https://i.imgur.com/qQQA9EF.mp4", "https://i.imgur.com/52WqU8b.mp4",
  "https://i.imgur.com/OfapMEc.mp4", "https://i.imgur.com/ZgKOM35.mp4", "https://i.imgur.com/ERpLZf6.mp4",
  "https://i.imgur.com/gZn2D29.mp4", "https://i.imgur.com/mDEJmn9.mp4", "https://i.imgur.com/hD9xEG0.mp4",
  "https://i.imgur.com/I9iT4fd.mp4", "https://i.imgur.com/pFVhztV.mp4", "https://i.imgur.com/ZyoIqNm.mp4",
  "https://i.imgur.com/UFXaqRg.mp4", "https://i.imgur.com/S4GL3Qh.mp4", "https://i.imgur.com/2sITIbU.mp4",
  "https://i.imgur.com/AURklV9.mp4"
];

module.exports.handleEvent = async function ({ event, api }) {
  const msg = event.body?.toLowerCase();
  if (!msg) return;
  if (!keywords.some(key => msg.includes(key))) return;

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const video = videos[Math.floor(Math.random() * videos.length)];
  const border = borders[Math.floor(Math.random() * borders.length)];

  api.sendMessage({
    body: `${border}\n${reply}\n${border}`,
    attachment: await global.utils.getStreamFromURL(video)
  }, event.threadID, event.messageID);
};

module.exports.run = async () => {};
