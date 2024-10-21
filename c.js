// Example JavaScript file (app.js)
window.addEventListener('load', function() {
  window.botpressWebChat.init({
    botId: 'pccoe-bot',
    hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
    configUrl: 'https://files.bpcontent.cloud/2024/10/20/11/20241020114331-SFM7JAJU.json',
  });

  // Optionally log when a message is sent
  window.botpressWebChat.onEvent((event) => {
    console.log('Botpress event:', event);
  });
});
