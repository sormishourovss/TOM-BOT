const fs = require("fs");
module.exports.config = {
	    name: "salam",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "salam",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Walaikumussalam")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("Salam")==0) {
		var msg = {
				body: "salam🖤🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/salam.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
