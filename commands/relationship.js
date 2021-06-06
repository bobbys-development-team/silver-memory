const {article,proper} = require("../modules/lang");

module.exports = {
	help: cfg => "View or change " + article(cfg) + " " + cfg.lang + "'s relationship",
	usage: cfg =>  ["relationship <name> [relationship] - if relationship is specified, change the " + cfg.lang + "'s relationship, if not, simply echo the current one",
		"relationship [name] clear/remove/none/delete - Unset a relationship for the given " + cfg.lang + "."],
	permitted: () => true,
	groupArgs: true,
	execute: async (bot, msg, args, cfg) => {
		if(!args[0]) return bot.cmds.help.execute(bot, msg, ["relationship"], cfg);
		
		//check arguments
		let member = await bot.db.members.get(msg.author.id,args[0]);
		if(!member) return "You don't have " + article(cfg) + " " + cfg.lang + " with that name registered.";
		if(!args[1]) return member.relationship ? "Current relationship: " + member.relationship + "\nTo remove it, try " + cfg.prefix + "relationship " + member.name + " clear" : "No relationship currently set for " + member.name;
		if(["clear","remove","none","delete"].includes(args[1])) {
			await bot.db.members.update(msg.author.id,member.name,"relationship",null);
			return "Description cleared.";
		}
		
		//update member
		let temp = msg.content.slice(msg.content.indexOf(args[0]) + args[0].length);
		let desc = temp.slice(temp.indexOf(args[1]));
		await bot.db.members.update(msg.author.id,args[0],"relationship",desc.slice(0,1023));
		if(desc.length > 1023) return "relationship updated, but was truncated due to Discord embed limits.";
		return "relationship updated successfully.";
	}
};