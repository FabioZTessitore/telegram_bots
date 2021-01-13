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

bot.start(ctx => {
    ctx.reply('Hey, sono un semplice bot.');
    ctx.reply('Cosa vuoi fare:\n1) Dialogare con me;\n2) Un po\' di matematica insieme.');
});

bot.on('text', ctx => {
    /*console.log(ctx.from);
    if (ctx.from.username === 'fabioztessitore') {
        ctx.reply('IMPORTANT: ' + ctx.message.text);
    } else {
        ctx.reply('UNVERIFIED CLAIM: ' + ctx.message.text);
    }*/

    var count = 0;

    if (ctx.message.text === 'coglione'){
        if (count === 0) {
            ctx.reply('Zì, stai calmo.');
            count += 1;

        } else if (count === 1){
            ctx.reply('Porcoddio, coglione di merda, stai zitto.');
            count += 1;

        } else if (count === 2){
            ctx.reply('Non parlo con la gente idiota.');
            count +=1;

        } else {
            break;
        }

    } else {
        ctx.reply('Hey Bro!');
    }

    /*if (Math.random() < .1){
        ctx.reply('È uscito un numero minore di 0.1');
    } else {
        ctx.reply('È uscito un numero minore di 0.1');
    }*/
});

/*new function controlloParoleOffensive(){
    var count = 0;

    if (ctx.message.text === 'coglione'){
        if (count === 0) {
            ctx.reply('Zì, stai calmo.');
            count += 1;

        } else if (count === 1){
            ctx.reply('Porcoddio, coglione di merda, stai zitto.');
            count += 1;

        } else if (count === 2){
            ctx.reply('Non parlo con la gente idiota.');
            count +=1;
        } else {
            break;
        }
    } else {
        ctx.reply('Hey Bro!');
    }
}*/

bot.launch();