const {article} = require("../modules/lang");

module.exports = {
	help: cfg => "Print this message, or get help for a specific command",
	usage: cfg =>  ["help - print list of commands", 
		"help [command] - get help on a specific command"],
	permitted: () => true,
	execute: async (bot, msg, args, cfg) => {
		//help for a specific command
		if(args[0]) {
			if(bot.cmds[args[0]] && bot.cmds[args[0]].usage) {
				let output = { embed: {
					title: "Bot Command | " + args[0],
					description: bot.cmds[args[0]].help(cfg) + "\n\n**Usage:**\n",
					timestamp: new Date().toJSON(),
					color: 0x999999,
					author: {
						name: "silver memory",
						icon_url: bot.user.avatarURL
					},
					footer: {
						text: "If something is wrapped in <> or [], do not include the brackets when using the command. They indicate whether that part of the command is required <> or optional []."
					}
				}};
				for(let u of bot.cmds[args[0]].usage(cfg))
					output.embed.description += `${cfg.prefix + u}\n`;
				if(bot.cmds[args[0]].desc)
					output.embed.description += `\n${bot.cmds[args[0]].desc(cfg)}`;
				return output;
			}
			return "Command not found.";
		}

		//general help
		let output = { embed: {
			title: "silver memory | Help",
			description: "I am silver memory, a bot that allows you to send messages as other pseudo-users using Discord webhooks.\nTo get started, register " + article(cfg) + " " + cfg.lang + " with `" + cfg.prefix + "register` and enter a message with the brackets you set!\nExample: `" + cfg.prefix + "register test [text]` to register with brackets as []\n`[Hello!]` to proxy the message 'Hello!'\n\n**Command List**\nType `"+cfg.prefix+"help command` for detailed help on a command.\n" + String.fromCharCode(8203) + "\n",
			color: 0x999999,
			author: {
				name: "silver memory",
				icon_url: bot.user.avatarURL
			}
		}};
		for(let cmd of Object.keys(bot.cmds)) {
			if(bot.cmds[cmd].help)
				output.embed.description += `**${cfg.prefix + cmd}**  -  ${bot.cmds[cmd].help(cfg)}\n`;
		}
		output.embed.fields = [{ name: "\u200b", value: `Single or double quotes can be used in any command to specify multi-word arguments!\n\nProxy tips:\nReact with \u274c to a recent proxy to delete it (if you sent it)!\nReact with \u2753 to a recent proxy to show who sent it in DM!\n\n${process.env.WEBSITE ? "Questions? Join the support website: [website url](https://online-hangout.com/c/" + process.env.WEBSITE_URL + ")" : "" }\nNow accepting donations to cover server costs! [website pay](https://online-hangout.com/s/prod_Iy2Uxda814YqOE)\nInvite the bot to your server --> [click](https://discord.com/oauth2/authorize?client_id=${process.env.BOT_INVITE}&scope=bot&permissions=536996928)`}];
		return output;
	}
};
