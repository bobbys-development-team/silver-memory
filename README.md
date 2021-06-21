# PandaCrate
A Discord bot written in <a href="https://github.com/abalabahaha/eris">eris</a> for proxying user messages through webhooks to emulate users having multiple user accounts.

[![Discord Bots](https://top.gg/api/widget/841379848085962792.svg)](https://top.gg/bot/841379848085962792)



# Commands
- pika!avatar  -  View or change a member's avatar
- pika!birthday  -  View or change a member's birthday, or see upcoming birthdays
- pika!brackets  -  View or change a member's brackets
- pika!cfg  -  Configure server-specific settings
  - pika!cfg prefix \<newPrefix> - Change the bot's prefix
  - pika!cfg rename \<newname> - Change all instances of the default name 'member' in bot replies in this server to the specified term
  - pika!cfg log \<channel> - Enable the bot to send a log of all member messages and some basic info like who registered them. Useful for having a searchable channel and for distinguishing between similar names.
  - pika!cfg blacklist <add|remove> <channel(s)> - Add or remove channels to the bot's proxy blacklist - users will be unable to proxy in blacklisted channels.
  - pika!cfg cmdblacklist <add|remove> <channel(s)> - Add or remove channels to the bot's command blacklist - users will be unable to issue commands in blacklisted channels.
- pika!describe  -  View or change a member's description
- pika!export - Export your data to a file
- pika!feedback  -  Get a link to the support server
- pika!find  -  Find and display info about members by name
- pika!group - View or change your groups
- pika!help  -  Print this message, or get help for a specific command
- pika!invite  -  Get the bot's invite URL
- pika!list  -  Get a detailed list of yours or another user's registered members
- pika!listng - Like list, but without showing group info
- pika!register  -  Register a new member
- pika!remove  -  Unregister a member
- pika!rename  -  Change a member's name
- pika!showuser  -  Show the user that registered the member that last spoke
- pika!tag  -  Remove or change a member's or your user tag (displayed next to name when proxying)
- pika!togglebrackets - Toggle whether the brackets used to proxy also show up in the resulting message for the given member.
