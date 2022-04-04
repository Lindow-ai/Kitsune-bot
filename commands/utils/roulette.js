const { MessageEmbed } = require('discord.js');

const roulette = ['Cartes aux trésors', 'Cache cache', 'Déguisement (thème)', 'Déguisement (couleur)', 'Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)', 'Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)', 'Donjons avec nos pire classe', 'Défi niveau max (des gens present) sans le cristal de job', 'chasse au trésor'];

const randomRoulette = Math.floor(Math.random()*roulette.length);
const rRandomRoulette = roulette[randomRoulette];

module.exports = {
    name: 'roulette',
    description: 'Commande pour la roulette!',
    run: (client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('🎡 Roulette')
        .setThumbnail(client.user.displayAvatarURL())
        .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
        .addFields({ name: "Nom de l'événement", value: `\`${rRandomRoulette}\``, inline: true })
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
        message.channel.send({ embeds: [embed] });
    },
    runSlash: (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('🎡 Roulette')
        .setThumbnail(client.user.displayAvatarURL())
        .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
        .addFields({ name: "Nom de l'événement", value: `\`${rRandomRoulette}\``, inline: true })
        .addFields()
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [embed] })
    }
};