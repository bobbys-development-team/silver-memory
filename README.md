# PandaCrate
A Discord bot written in <a href="https://github.com/abalabahaha/eris">eris</a> for proxying user messages through webhooks to emulate users having multiple user accounts.

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

# Installation
This bot runs off of Node.js. You can download it from https://nodejs.org/en/download/

Once node is installed, run `npm install` from the bot directory to install the bot's dependencies. If the dependencies all install successfully (note: you may have to run `npm -g install windows-build-tools` first if on Windows) then you can now run the bot by running `node index`.

Additionally, the bot now requires PostgreSQL to run. You can download it from https://www.postgresql.org/download/
The bot now also runs with Redis. Download it from https://redis.io/download

# Running
The bot expects a file in the same directory named `.env` with some data to get it started. Format should look like this:
```
DISCORD_TOKEN=
DISCORD_OWNERID=
DISCORD_INVITE= (note: remove this line if you don't want the bot to have an invite command)
PGUSER=???
PGHOST=???
PGDATABASE=???
PGPASSWORD=???
PGPORT=3456
SENTRY_DSN=https://(key)@sentry.io/(id)
DEFAULT_PREFIX=tul!
DEFAULT_LANG=tupper
USE_GUILD_SUBSCRIPTIONS=false
REDISURL=redis://localhost:6379
```
The PG-prefixed variables should be filled in with the connection info to your PostgreSQL database set up during installation. You need a **database**, a **user** with associated **password** with full write access to that database, and the **host IP** of the machine running the server (localhost if it's the same machine).
SENTRY_DSN is a link to a registered Sentry project. Make one here: https://sentry.io/ and copy the provided DSN link into that field.
Edit DEFAULT_PREFIX, DEFAULT_LANG as desired. Setting USE_GUILD_SUBSCRIPTIONS to true will guarantee list, find, and logging functions will always give the correct username.
Leave REDISURL alone unless you change the port Redis runs on or you host it on another machine.

[![](https://discord.com/api/guilds/721491823545024533/embed.png?style=banner4)](https://discord.gg/hR7C2aN)
