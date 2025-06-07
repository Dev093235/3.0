module.exports.config = {
  name: "bhootni",
  version: "1.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Female ghost scary replies with videos",
  commandCategory: "fun",
  cooldowns: 5
};

const replies = [
  "🔥 तूने भूतनी का नाम लिया, अब डर के आगे जीत नहीं! 👻😈",
  "👻 भूतनी आ गई, तेरी रूह पर कब्ज़ा करने! 🔥🔥",
  "🖤 चुड़ैल तेरे सपनों में डांस करने आ रही है!",
  "🕷️ डर जा! भूतनी तेरे घर में घुस गई!",
  "🌙 रात की रानी भूतनी तेरे पीछे है!",
  "💃 भूतनी की छाया तेरे ऊपर है!",
  "🕸️ भूतनी का जाल तेरे लिए बिछा है!",
  "👁️‍🗨️ चुड़ैल की नजरें तुझ पर टिक गई हैं!",
  "🔥 भूतनी की आग अब तेरे दिल में!",
  "🌚 चुड़ैल की चुप्पी तेरे लिए मौत है!",
  "🌪️ भूतनी का तूफ़ान तेरे घर में आएगा!",
  "😈 भूतनी की हँसी तेरे कानों में गूंजेगी!",
  "🦇 चुड़ैल की उड़ान तेरे सपनों में!",
  "👑 रात की रानी तेरे खून में समा चुकी है!",
  "🌌 भूतनी की शक्ति अब तेरे साथ है!",
  "🕷️ चुड़ैल का जादू तेरे ऊपर छाया है!",
  "🔥 भूतनी की आग तुझसे जलती रहेगी!",
  "🌙 तेरी रातों में भूतनी का डेरा है!",
  "👻 भूतनी की छाया तेरे पीछे है!",
  "🖤 चुड़ैल की आत्मा तुझमें बस गई!"
];

const media = [
  "https://i.imgur.com/kTX0eZ7.mp4",
  "https://i.imgur.com/7MfX45A.mp4",
  "https://i.imgur.com/RxqshWk.mp4",
  "https://i.imgur.com/PftRUaX.mp4",
  "https://i.imgur.com/vYBfW8S.mp4",
  "https://i.imgur.com/GcHxGHR.mp4",
  "https://i.imgur.com/CTW2Xc1.mp4",
  "https://i.imgur.com/sYy5vAf.mp4",
  "https://i.imgur.com/JaJ2r0Z.mp4",
  "https://i.imgur.com/RkqzDJK.mp4",
  "https://i.imgur.com/XY4Je04.mp4",
  "https://i.imgur.com/4oCLn4H.mp4",
  "https://i.imgur.com/hIr9VXC.mp4",
  "https://i.imgur.com/UxNHMoY.mp4",
  "https://i.imgur.com/TDEddmE.mp4",
  "https://i.imgur.com/nO7cxoR.mp4",
  "https://i.imgur.com/v0Um5NP.mp4",
  "https://i.imgur.com/c4Bv2nF.mp4",
  "https://i.imgur.com/ie0N29L.mp4",
  "https://i.imgur.com/Lrfcu3g.mp4"
];

function borderStyle2(text) {
  const border = "─".repeat(text.length + 6);
  return `┏━━${border}━━┓\n┃  ${text}  ┃\n┗━━${border}━━┛`;
}

module.exports.run = async function({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggers = ["bhootni", "bhutni", "chudail", "dayan", "pichani", "भूतनी", "चुड़ैल", "डायन", "पिसाचानी"];
  if (!triggers.some(w => msg.includes(w))) return;

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const video = media[Math.floor(Math.random() * media.length)];
  const borderedReply = borderStyle2(reply);

  api.sendMessage(borderedReply, event.threadID, () => {
    setTimeout(() => {
      api.sendMessage({
        body: "👻 भूतनी की भयानक झलक! 🔥",
        attachment: global.utils.getStreamFromURL(video)
      }, event.threadID);
    }, 1300);
  });
};
