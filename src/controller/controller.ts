import { Message } from "discord.js";
import { parseArgs, trimWhitespace } from "../utilities/util";
import commandMap from "./mapping";

export default async function(message: Message) {

    // sanitize the message body
    message.content = trimWhitespace(message.content).toLowerCase();

    // extract commandName from message
    const commandName = message.content.split(' ')[1];

    // fetch the command from commandMap
    const command = commandMap.get(commandName);

    // if command not found, post help and return
    if (!command) {
        postHelp(message);
        return;
    }
    
    // check if command regex matches
    for (const regex of command.regex) {
        if (regex.test(message.content)) {
            try {
                const { groups } = message.content.match(regex);
                const args = parseArgs(groups);
                await command.method(message, args);
            } catch (e) {
                await message.reply("An error occurred!");
                console.error(e);
            }
            return;
        }
    }

    // command syntax was incorrect, post command syntax
    await message.reply(`Gecersiz komut girdiniz, asagidakileri takip ediniz.\n\`${command.usage}\``);
}

async function postHelp(message: Message) {

    const str: Array<string> = [];

    for (const c of commandMap.values()) {
        str.push(`${c.help}\n\`${c.usage}\`\n`);
    }

    str.push(...[
        'Parametreler: `<zorunlu>`, `[zorunlu degil]`',
        'modeId: `br` Battle Royale, `rmbl` Rumble, `plndr` Plunder',
        'platformId: `psn` PlayStation, `xbl` Xbox, `atvi` Activision',
        'Sure: `h` saat, `d` gun, `w` hafta, `m` ay. Varsayilan `24h` (1 gun).'
    ]);
    
    await message.reply('**MasterBOT Warzone Stats Help**\n' + str.join('\n'));
}