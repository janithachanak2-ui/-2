const { cmd } = require("../command");
const yts = require("yt-search");

cmd(
  {
    pattern: "yts",
    alias: ["yts", "youtubesearch"],
    react: "🔎",
    desc: "Search YouTube videos",
    category: "search",
    filename: __filename,
  },
  async (
    janiya,
    mek,
    m,
    {
      from,
      quoted,
      q,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("*LINK EKA KO BALLO* 🔍");

      reply("*IDAPAN HOYANA GAMAN...* ⌛");

      const search = await yts(q);

      if (!search || !search.all || search.all.length === 0) {
        return reply("*UBATA HOYALA DENNE NA PALAYAN.* ☹️");
      }

      const results = search.videos.slice(0, 5); 
      let formattedResults = results.map((v, i) => (
        `🎬 *${i + 1}. ${v.title}*\n📅 ${v.ago} | ⌛ ${v.timestamp} | 👁️ ${v.views.toLocaleString()} views\n🔗 ${v.url}`
      )).join("\n\n");

      const caption = `  
*YT GET*
─────────────────────────
🔎 *Query*: ${q}
${formattedResults}
   `;

      await janiya.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/v5tz96.jpeg",
          },
          caption,
        },
        { quoted: mek }
      );
    } catch (err) {
      console.error(err);
      reply("*UBATA KELLEK NA NE EKA NISA MEKA WADA NA.* ❌");
    }
  }
);
