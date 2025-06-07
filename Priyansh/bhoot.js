module.exports.config = {
  name: "bhoot",
  version: "4.1",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Trigger on all bhoot spellings with scary video and msg",
  commandCategory: "fun",
  usages: "bhoot",
  cooldowns: 5,
  // Add a regex pattern for matching variants of 'bhoot'
  regex: /(bhoot+|bhut+|bhot+)/i
};

module.exports.run = async function ({ api, event }) {
  const scaryMessages = [
    "😱 पीछे मुड़कर मत देखना... भूत आ गया!",
    "👻 तुम्हारे पीछे कुछ है... आवाज़ सुनाई दे रही है?",
    "😨 दरवाज़े के पीछे कोई खड़ा है... डरो मत!",
    "👀 रात के 3 बजे का वक्त है... अजीब आवाज़ें आ रही हैं!",
    "😵 दरवाज़े की खटखट सुनाई दी? भूत हो सकता है!",
    "😰 अंधेरा बढ़ रहा है... कुछ छुपा हुआ है!",
    "💀 ये आवाज़ें सिर्फ तुम्हारे लिए हैं... संभल जाओ!",
    "🧟‍♂️ छुप छुप के कोई देख रहा है तुम्हें...",
    "😳 खिड़की से कोई झांक रहा है... संभल के!",
    "👹 आज रात बुरा सपना आएगा... भूत तुम्हारे पीछे है!"
  ];

  const videoLinks = [
    "https://i.imgur.com/xFiFevS.mp4",
    "https://i.imgur.com/5yt8Tru.mp4",
    "https://i.imgur.com/HvMcGpM.mp4",
    "https://i.imgur.com/nHgvkQa.mp4",
    "https://i.imgur.com/8txdfUp.mp4",
    "https://i.imgur.com/M0i0aGp.mp4",
    "https://i.imgur.com/tvYuyXk.mp4",
    "https://i.imgur.com/bBWfgHg.mp4",
    "https://i.imgur.com/Ci0MgBx.mp4",
    "https://i.imgur.com/XRw6YIl.mp4"
  ];

  const randomMsg = scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
  const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];

  return api.sendMessage({
    body: randomMsg,
    attachment: await global.utils.getStreamFromURL(randomVideo)
  }, event.threadID, event.messageID);
};
