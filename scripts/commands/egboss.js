const fs = require("fs");
module.exports.config = {
	    name: "farhan",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "farhan",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Farhan")==0 || event.body.indexOf("farhan")==0 || event.body.indexOf("ফারহান")==0 || event.body.indexOf("FARHAN")==0) {
		var msg = {
				body: "ফা্ঁর্ঁহা্ঁন্ঁ এ্ঁখ্ঁন্ঁ খু্ঁব্ঁ বি্ঁজি্ঁ 🥰❤️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/boss.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
