module.exports = {
	help: cfg => "donate to help the development of the bot",
    usage: cfg =>  ["pika!donate to see the donation page"],
    permitted: msg => true,
    execute: (bot, msg, args, cfg) => {
		return "https://www.patreon.com/bobbys_development_team";
	}
};