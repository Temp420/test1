/**
 * Created by Tom on 7/29/2017.
 */
exports.run = async (client, message,args) => {
    if (args < 1) return message.reply(" :x: O.o you wanna kiss yourself??");
    let stats = await client.getStats();
    stats.lewd++;
    client.saveStats(stats);
    await client.snekfetch.get('https://nekos.life/api/kiss')
        .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
        .then(r => message.channel.send(`${args} You got a kiss from ${message.author.username} :heart:`,{
            embed: {
                color: client.getRandomColor(),
                image: {
                    url: r.body.url
                }
            }
        }).catch(e => console.warn('wew tf happened here ' + e)));

};