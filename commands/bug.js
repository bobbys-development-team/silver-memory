module.exports = {
	help: cfg => "Get a link to the website so you can report a bug",
	usage: cfg => ["bug - get a link to the websit so you can report a bug"],
	permitted: msg => true,
	execute: (bot, msg, args, cfg) => {
		return "https://github.com/bobbys-development-team/silver-memory/issues/new?assignees=&labels=bug&template=bug_report.md&title=BUG";
	}
};