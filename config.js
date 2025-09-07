const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qqxfbh.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝐉𝐀𝐍𝐈𝐘𝐀 𝐕𝟏𝟎 THAMA PANAPITIN HUTTO😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
