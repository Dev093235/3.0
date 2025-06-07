module.exports.config = {
  name: "bhoot",
  version: "1.1.3",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Scary ghost command with anime videos",
  commandCategory: "fun",
  usages: "bhoot",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const msg = event.body.toLowerCase();
  const triggerWords = ["bhoot", "भूत", "bhootni", "radha", "राधा"];
  if (!triggerWords.some(word => msg.includes(word))) return;

  const replies = [
    "😱 किसने बोला भूत? तेरे पीछे आ गया!",
    "👻 दरवाजा मत खोलना… अंदर भूत है!",
    "💀 आज रात नींद नहीं आएगी!",
    "😨 पीछे मत देख, कुछ है वहाँ!",
    "😈 राधा ने पुकारा… और मैं आ गया!",
    "👀 तू डर गया? अभी तो trailer है!",
    "🥶 भूत दिखा क्या? असली वाला!",
    "🫣 लाइट बंद कर… आवाज़ सुन रहा है?",
    "😰 तेरा नाम लिया था न भूत ने!",
    "🌕 Poornima ki raat... perfect time!",
    "🔪 Ab bhag tu... late ho गया!",
    "💤 Sote waqt aankh khuli mat rakhna!",
    "😵 Tu akele room me hai न? Bad luck!",
    "🙀 Yeh awaaz tujhe hi sunai di thi na?",
    "🪞 Mirror me dekha kya? Wahi tha!",
    "🪦 Tera naam likha hai grave pe!",
    "☠️ Chill kar... ya main chalaa aunga!",
    "😵‍💫 Bhool ja Radha ko... warna main nahi!",
    "🕸️ Kya tujhe feel hua... koi saans le raha tha?",
    "😬 Ab tujhe koi nahi bacha सकता!"
  ];

  const media = [
    "https://i.imgur.com/kLJzHgD.mp4", "https://i.imgur.com/bYxykoU.mp4",
    "https://i.imgur.com/qW3FG4K.mp4", "https://i.imgur.com/X8kYVjY.mp4",
    "https://i.imgur.com/2nRQphx.mp4", "https://i.imgur.com/vZdPtCg.jpg",
    "https://i.imgur.com/YXq5Syx.jpg", "https://i.imgur.com/EktbHZb.jpg",
    "https://i.imgur.com/5v5AEmT.jpg", "https://i.imgur.com/eo1vIR3.jpg",
    "https://i.imgur.com/nE9hZyn.mp4", "https://i.imgur.com/gdrkRG6.jpg",
    "https://i.imgur.com/Q5Gvjhv.mp4", "https://i.imgur.com/BRi8W7P.jpg",
    "https://i.imgur.com/H0UgyZw.mp4", "https://i.imgur.com/j3Lb12R.jpg",
    "https://i.imgur.com/oyjJ8zT.mp4", "https://i.imgur.com/f3ZmNSM.jpg",
    "https://i.imgur.com/2HxvMXZ.jpg", "https://i.imgur.com/NtIguvi.mp4"
  ];

  const line = replies[Math.floor(Math.random() * replies.length)];
  const randomMedia = media[Math.floor(Math.random() * media.length)];
  const isVideo = randomMedia.endsWith(".mp4");

  api.sendMessage(line, event.threadID, () => {
    setTimeout(async () => {
      return api.sendMessage({
        body: isVideo ? "📽️ लो अब डर भी वीडियो में आएगा!" : "📸 बाप रे! देख ले अब 😂",
        attachment: await global.utils.getStreamFromURL(randomMedia)
      }, event.threadID, event.messageID);
    }, 1500);
  });
};
