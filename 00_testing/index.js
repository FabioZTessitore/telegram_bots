/* index.js */

/*
    READING THE TOKEN AND START THE BOT

    export BOT_TOKEN=`cat token` && npm run start
*/

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

function testBot() {
    console.log(bot);
}
// testBot();

function testMiddleware() {
    bot.use( (ctx, next) => {
        console.log('middleware here!');
        next();
    });

    bot.on('text', ctx => {
        ctx.reply('Hello, World!');
        ctx.reply('Yes, I\'m dumb ...');
    });

    bot.launch();
}
testMiddleware();