/**
 * Created by Oliver(AnounFX™) on 8/01/2017.
 */
exports.run = async (client, message) => {
    let stats = await client.getStats();
    stats.lizard++;
    client.saveStats(stats);
    await client.snekfetch.get(`https://discordbots.org/api/bots/334186716770598912/votes?onlyids=1`)
        .set('Authorization', client.config.dblkey)
        .then(rsp => {
        if (!rsp.body.includes(message.author.id)) return message.reply(`hmmmm, you must upvote at https://discordbots.org/api/bots/${client.user.id}`);
    client.snekfetch.get('https://nekos.life/api/lizard')
    .then(r => message.channel.send({
        embed: {
            color: client.getRandomColor(),
            author: {
                name: "Lizard \\o/",
                icon_url: client.user.avatarURL
            },
            image: {
                url: r.body.url
            }
        }
    }).catch(e => console.warn('wew tf happened here ' + e)));
        });

};