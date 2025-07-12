const express = require('express');
const cors = require('cors');
const { Client, GatewayIntentBits } = require('discord.js');
const app = express();
const port = 3000;

// Setup
app.use(cors());
app.use(express.json());

// Bot Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const TOKEN = 'MTM5MzU4MDA1MDQ3Mjc2MzUxMw.GdDkuO.ctgLSwlNk-Rz2QvJMy5KPnG_be1JS6S3Kx5Xwk';
const CHANNEL_ID = '1393578579907969044';

client.once('ready', () => {
  console.log(`Bot siap sebagai ${client.user.tag}`);
});

app.post('/daftar', async (req, res) => {
  const { nama, umur, idDiscord } = req.body;
  const channel = await client.channels.fetch(CHANNEL_ID);
  if (channel) {
    await channel.send(`📢 **PENDAFTARAN EVENT**\nNama: ${nama}\nUmur: ${umur}\nID Discord: ${idDiscord}`);
  }
  res.sendStatus(200);
});

client.login(TOKEN);
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));
