module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100070297030133","01758804653","61551367947380") {
    var aid = ["100042318302537","100070297030133","61551367947380"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" BOSS"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
