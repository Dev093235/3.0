module.exports.config = {
  name: "rakshas",
  version: "1.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Rakshas scary replies with videos",
  commandCategory: "fun",
  cooldowns: 5
};

const replies = [
  "👹 राक्षस जाग गया है, संभल जा!",
  "🔥 तेरे अंदर का राक्षस बाहर आने को तैयार है!",
  "💀 डर के आगे जीत है, राक्षस के आगे हार!",
  "👺 राक्षस तेरे सपनों में हमला कर रहा है!",
  "⚔️ राक्षस की तलवार तेरे दिल को छेद जाएगी!",
  "😈 राक्षस की आँखें तेरे ऊपर टिकी हैं!",
  "💥 राक्षस की ताकत तेरे अंदर है!",
  "👿 राक्षस तेरे खून में समाया है!",
  "🦹‍♂️ राक्षस तेरे दुश्मनों को मार डालेगा!",
  "⚡️ राक्षस का गुस्सा अब फूट पड़ा है!",
  "🛡️ राक्षस की ढाल तेरे साथ है!",
  "🔥 राक्षस की आग तेरे आस-पास जल रही है!",
  "👊 राक्षस का प्रहार अब तुझ पर होगा!",
  "👹 राक्षस की दहशत तेरे सपनों में!",
  "💀 राक्षस का भय अब तेरे दिल में!",
  "🗡️ राक्षस की तलवार तेरे लिए तैयार है!",
  "⚡ राक्षस की शक्ति अब जागृत हो गई है!",
  "🔥 राक्षस की आग तुझसे जल रही है!",
  "👿 राक्षस का आतंक अब तेरे साथ है!",
  "💥 राक्षस की ताकत से डर!"
];

const media = [
  "https://i.imgur.com/FH7oUup.mp4",
  "https://i.imgur.com/Zx7GJli.mp4",
  "https://i.imgur.com/vA7qzYw.mp4",
  "https://i.imgur.com/7uMfN93.mp4",
  "https://i.imgur.com/H6JklYd.mp4",
  "https://i.imgur.com/x8yDTeL.mp4",
  "https://i.imgur.com/M2Y6Jqi.mp4",
  "https://i.imgur.com/OkOY9zG.mp4",
  "https://i.imgur.com/x4cZH3B.mp4",
  "https://i.imgur.com/MLrOudb.mp4",
  "https://i.imgur.com/kXChBLg.mp4",
  "https://i.imgur.com/1wzqDsy.mp4",
  "https://i.imgur.com/E5EDvFj.mp4",
  "https://i.imgur.com/nzI5dmT.mp4",
  "https://i.imgur.com/0yK7o4j.mp4",
  "https://i.imgur.com/G5CpZDy.mp4",
  "https://i.imgur.com/0hN8HbV.mp4",
  "https://i.imgur.com/DeH4xq6.mp4",
  "https://i.imgur.com/UXJoXQ9.mp4",
  "https://i.imgur.com/s9X6msV.mp4"
];

function borderStyle3(text) {
  const border = "■".repeat(text.length + 4);
  return `⬛${border}⬛\n⬛  ${text}  ⬛\n⬛${border}⬛`;
}

module.exports.run = async function({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggers = ["rakshas", "राक्षस", "rakhshas"];
  if (!triggers.some(w => msg.includes(w))) return;

  const reply = replies[Math.floor(Math.random() * replies.length)];
  const video = media[Math.floor(Math.random() * media.length)];
  const borderedReply = borderStyle3(reply);

  api.sendMessage(borderedReply, event.threadID, () => {
    setTimeout(() => {
      api.sendMessage({
        body: "👹 राक्षस की प्रचंड ताकत!",
        attachment: global.utils.getStreamFromURL(video)
      }, event.threadID);
    }, 1300);
  });
};
