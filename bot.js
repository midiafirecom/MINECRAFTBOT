const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'SEU_IP_AQUI',       // substitua pelo IP do servidor Minecraft 1.8.8
  port: 25565,               // substitua pela porta, se for diferente
  username: 'SeuBot',        // nome do bot
  version: '1.8.8'
});

bot.on('spawn', () => {
  console.log('Bot conectado ao servidor!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'ping') {
    bot.chat('pong!');
  }
});

bot.on('error', (err) => {
  console.error('Erro do bot:', err);
});

bot.on('end', () => {
  console.log('Bot desconectado, tentando reconectar em 5 segundos...');
  setTimeout(() => {
    bot.connect();
  }, 5000);
});
