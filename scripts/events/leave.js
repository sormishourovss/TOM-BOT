module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Nayan",
	description: "notify leave.",
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "লি্ঁভ্ঁ নি্ঁলে্ঁ দ্বি্ঁতী্ঁয়্ঁ বা্ঁর্ঁ এ্ঁড্ঁ ক্ঁরা্ঁ হ্ঁবে্ঁ না্ঁ 🚫" : "Kicked by Administrator";
	const path = join(__dirname, "nayan", "leaveGif");
	const gifPath = join(path, `l.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "আ্ঁপ্ঁনি্ঁ {name} গ্রু্ঁপে্ঁ নি্ঁয়্ঁম্ঁ না্ঁ মে্ঁনে্ঁ চ্ঁলা্ঁর্ঁ কা্ঁর্ঁনে্ঁ কি্ঁক্ঁ দি্ঁলা্ঁম্ঁ .\n\n{type} " : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
