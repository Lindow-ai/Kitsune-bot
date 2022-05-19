const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roulette-c',
    description: 'Commande pour la roulette des costumes!',
    run: (client, message, args) => {

        const roulette = ['Déguisement (thème)', 'Déguisement (couleur)'];
        
        const randomRoulette = Math.floor(Math.random()*roulette.length);
        const rRandomRoulette = roulette[randomRoulette];

        const color = ['Noir', 'Blanc', 'Bleu', 'Jaune', 'Rouge', 'Violet', 'Vert', 'Orange', 'Gris', 'Rose', 'Multi-couleurs'];

        const randomColor = Math.floor(Math.random()*color.length);
        const cRandomColor = color[randomColor];

        const theme = ['Gothic', 'Dessin Animé', 'Aristo', 'Animaux', 'Princesse/Prince', 'Transgenre', 'Décontracté', 'Moche', 'Power Rangers !', 'Tribal', 'Maillot de bain', 'Perso jeu video']

        const randomTheme = Math.floor(Math.random()*color.length);
        const tRandomTheme = theme[randomTheme];

        switch(rRandomRoulette) {
            case 'Déguisement (thème)':
            const embed3 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://cdn.discordapp.com/attachments/949391876627243078/964975866763415612/2022-04-16_21-49-07-538_Screenshot_lumos.png')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (thème)\``, inline: true }, {name : 'Thème', value: `\`${tRandomTheme}\``})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed3] });
            break;
            case 'Déguisement (couleur)':
            const embed4 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://cdn.discordapp.com/attachments/949391876627243078/962439486724259870/2022-04-09_21-50-29-754_Screenshot_Neneko_Dream.png')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (couleur)\``, inline: true }, {name: "Couleur", value:`\`${cRandomColor}\``})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed4] });
            break;
            default : 
            const embed = new MessageEmbed()
            .setTitle('🎡 Roulette')
            .setThumbnail(client.user.displayAvatarURL())
            .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
            .addFields({ name: "Nom de l'événement", value: `\`${rRandomRoulette}\``, inline: true }, {name: 'Commentaire', value: 'Je pensait le rajouter quand on auras une maison de CL. Sinon sa va être compliqué.'})
            .setTimestamp()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
            message.channel.send({ embeds: [embed] });
        }
    },
    runSlash: (client, interaction) => {

        const roulette = ['Déguisement (thème)', 'Déguisement (couleur)'];
        
        const randomRoulette = Math.floor(Math.random()*roulette.length);
        const rRandomRoulette = roulette[randomRoulette];

        const color = ['Noir', 'Blanc', 'Bleu', 'Jaune', 'Rouge', 'Violet', 'Vert', 'Orange', 'Gris', 'Rose', 'Multi-couleurs'];

        const randomColor = Math.floor(Math.random()*color.length);
        const cRandomColor = color[randomColor];

        const theme = ['Gothic', 'Dessin Animé', 'Aristo', 'Animaux', 'Princesse/Prince', 'Transgenre', 'Décontracté', 'Moche', 'Power Rangers !', 'Tribal', 'Maillot de bain', 'Perso jeu video']

        const randomTheme = Math.floor(Math.random()*color.length);
        const tRandomTheme = theme[randomTheme];


        switch(rRandomRoulette) {
            case 'Déguisement (thème)':
            const embed3 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://cdn.discordapp.com/attachments/949391876627243078/964975866763415612/2022-04-16_21-49-07-538_Screenshot_lumos.png')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (thème)\``, inline: true }, {name : 'Thème', value: `\`${tRandomTheme}\``})
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed3] });
                break;
            case 'Déguisement (couleur)':
            const embed4 = new MessageEmbed()
            .setTitle('🎡 Roulette')
            .setThumbnail(client.user.displayAvatarURL())
            .setImage('https://cdn.discordapp.com/attachments/949391876627243078/962439486724259870/2022-04-09_21-50-29-754_Screenshot_Neneko_Dream.png')
            .addFields({ name: "Nom de l'événement", value: `\`Déguisement (couleur)\``, inline: true }, {name: "Commentaire", value: "Pas de Rose !!! SVP (oh si si démo en rose on veut voir ça !)", inline: true}, {name: "Couleur", value:`\`${cRandomColor}\``})
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed4] });
            break;
            default : 
            const embed = new MessageEmbed()
            .setTitle('🎡 Roulette')
            .setThumbnail(client.user.displayAvatarURL())
            .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
            .addFields({ name: "Nom de l'événement", value: `\`${rRandomRoulette}\``, inline: true }, {name: 'Commentaire', value: 'Je pensait le rajouter quand on auras une maison de CL. Sinon sa va être compliqué.'})
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
            interaction.reply({ embeds: [embed] });
        }
    }
};