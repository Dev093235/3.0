module.exports.config = {
  name: "devilop",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Devil OP Anime Action with Video",
  commandCategory: "fun",
  usages: "devilop",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggerWords = [
    "devil", "demon", "saitan", "shaitan", "rakshas", "राक्षस", "शैतान"
  ];
  if (!triggerWords.some(word => msg.includes(word))) return;

  const replies = [
    "😈 तुमने राक्षस को बुलाया... और मैं आ गया!",
    "🔥 Devil Mode Activated... अब भुगत!",
    "🩸 मेरे सींग नहीं दिखते, पर वार जानलेवा है!",
    "👹 आ गया तेरा अंत, शैतान style में!",
    "🕷️ Darkness का असली राजा मैं हूँ!",
    "😤 तू Hero... मैं Villain नहीं, Final Boss हूँ!",
    "🌑 Shadow से मत खेल... वो तुझे निगल जाएगा!",
    "☠️ तू ज़िंदा है क्योंकि मैंने चाहा!",
    "💀 मैं मौत नहीं लाता... मैं खुद मौत हूँ!",
    "🧠 तुझे भ्रम है कि तू बच जाएगा!",
    "🩸 मेरे अंदर का दानव तुझे तबाह कर देगा!",
    "👁️ देख मेरी आँखों में, सिर्फ़ विनाश है!",
    "😈 तुमने मुझे पुकारा, अब पछताओ मत!",
    "🌋 मेरा गुस्सा ज्वालामुखी से भी ज़्यादा है!",
    "🗡️ तेरी किस्मत ने आज ग़लत दरवाज़ा खटखटाया!",
    "😶 Now facing the God of Destruction!",
    "🔥 तुम Light हो? मैं वो अंधेरा हूँ जो सब निगल जाए!",
    "🌑 तू जो देख रहा है, वो Nightmare का ट्रेलर है!",
    "😵 Hell Gate खुल चुका है!",
    "💥 अब तेरे Redemption का time खत्म!"
  ];

  const devilVideos = [
    "https://i.imgur.com/Ho0mwoW.mp4", "https://i.imgur.com/3Mt34iI.mp4",
    "https://i.imgur.com/CGwAqtF.mp4", "https://i.imgur.com/ZDpug9F.mp4",
    "https://i.imgur.com/3svBgGR.mp4", "https://i.imgur.com/N8FfL7U.mp4",
    "https://i.imgur.com/tclIjdx.mp4", "https://i.imgur.com/3IGGLXa.mp4",
    "https://i.imgur.com/Ug7Axy0.mp4", "https://i.imgur.com/Cx6kAfn.mp4",
    "https://i.imgur.com/fTI0n7n.mp4", "https://i.imgur.com/wj8zopz.mp4",
    "https://i.imgur.com/X3tqdfb.mp4", "https://i.imgur.com/ZVLk9rZ.mp4",
    "https://i.imgur.com/3JY6i0z.mp4", "https://i.imgur.com/YZ9RLAv.mp4",
    "https://i.imgur.com/JkMWyHY.mp4", "https://i.imgur.com/Y2uUwLT.mp4",
    "https://i.imgur.com/1OWBlU7.mp4", "https://i.imgur.com/jqO6xeX.mp4"
  ];

  const line = replies[Math.floor(Math.random() * replies.length)];
  const video = devilVideos[Math.floor(Math.random() * devilVideos.length)];

  api.sendMessage(line, event.threadID, () => {
    setTimeout(() => {
      api.sendMessage({
        body: "👺 Devil Mode – You're Done! 💥",
        attachment: global.utils.getStreamFromURL(video)
      }, event.threadID, event.messageID);
    }, 1200);
  });
};
