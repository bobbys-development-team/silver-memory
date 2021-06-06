module.exports = {
	help: cfg => "Get a link to the official support website!",
	usage: cfg => ["feedback - get a link to the support website"],
	permitted: msg => true,
	execute: (bot, msg, args, cfg) => {
		return process.env.WEBSITE;
	}
};
