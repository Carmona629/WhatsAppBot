const { Client, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();
client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('message_create', message => {
    if (message.body.toLocaleLowerCase() === 'help') {
        client.sendMessage(message.from, '*COMANDOS UMBIRIRICAGPT*:\nPing => Pong\nRafael => "Não teve graça 🙄"\nMbappe=> Mbappé');
    }
    if (message.from === "120363104841456502@g.us" && message.body.toLocaleLowerCase() === 'ping') {
	    client.sendMessage(message.from, 'pong');
    }
    if (message.from === "120363104841456502@g.us" && message.body.toLocaleLowerCase() === 'rafael') {
	    client.sendMessage(message.from, 'Não teve graça 🙄');
    }
    if (message.from === "120363104841456502@g.us" && message.body.toLocaleLowerCase() === 'mbappe') {
	    client.sendMessage(message.from, 'Mbappé');
    }
	// if (message.body.toLocaleLowerCase() === '') {
	// 	client.sendMessage(message.from, 'pong');
    // }
    // if (message.body.toLocaleLowerCase() === 'hello') {
    //     client.sendMessage(message.from, 'Hello World!');
    // }
    // if (message.body.toLocaleLowerCase() === 'oi') {
    //     let button = new Buttons('Button body', [{ body: '01' }, { body: '02' }], 'title', 'footer');
    //     client.sendMessage(message.from, 'Hello World!', button);
    // }
    console.log('mensaje de: ', message.from, " ", 'Texto: ', message.body)
});
client.initialize();

// Grupos e contatos:
// Eu: 
// Uber: "120363104841456502@g.us"