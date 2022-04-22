const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roulette',
    description: 'Commande pour la roulette!',
    run: (client, message, args) => {

        const roulette = ['Cartes aux trésors', 'Cache cache', 'Déguisement (thème)', 'Déguisement (couleur)', 'Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)', 'Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)', 'Donjons avec nos pire classe', 'Défi niveau max (des gens present) sans le cristal de job', 'chasse au trésor'];
        
        const randomRoulette = Math.floor(Math.random()*roulette.length);
        const rRandomRoulette = roulette[randomRoulette];

        const color = ['Noir', 'Blanc', 'Bleu', 'Jaune', 'Rouge', 'Violet', 'Vert', 'Orange', 'Gris', 'Rose'];

        const randomColor = Math.floor(Math.random()*color.length);
        const cRandomColor = color[randomColor];

        const theme = ['Gothic', 'Dessin Animé', 'Aristo', 'Animaux', 'Princesse/Prince', 'Transgenre', 'Décontracté', 'Moche', 'Power Rangers !', 'Tribal', 'Maillot de bain', 'Perso jeu video']

        const randomTheme = Math.floor(Math.random()*color.length);
        const tRandomTheme = theme[randomTheme];

        switch(rRandomRoulette) {
            case 'Cartes aux trésors':
            const embed1 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Cartes aux trésors\``, inline: true })
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed1] });
            break;
            case 'Cache cache':
            const embed2 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Cache cache\``, inline: true })
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed2] });
            break;
            case 'Déguisement (thème)':
            const embed3 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (thème)\``, inline: true }, {name : 'Thème', value: `\`${tRandomTheme}\``})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed3] });
            break;
            case 'Déguisement (couleur)':
            const embed4 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (couleur)\``, inline: true }, cRandomColor === "Rose" ? {name: "Commentaire", value: "Pas de Rose !!! SVP (oh si si démo en rose on veut voir ça !)", inline: true} : null, {name: "Couleur", value:`\`${cRandomColor}\``})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed4] });
            break;
            case 'Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)':
            const embed5 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)\``, inline: true })
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed5] });
            break;
            case 'Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)':
            const embed6 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)\``, inline: true })
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed6] });
            break;
            case 'Donjons avec nos pire classe':
            const embed7 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Donjons avec nos pire classe\``, inline: true })
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed7] });
            break;
            case 'Défi niveau max (des gens present) sans le cristal de job':
            const embed8 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Défi niveau max (des gens present) sans le cristal de job\``, inline: true }, {name: 'Commentaire', value: 'Ne marche que sur les classes ARR'})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed8] });
            break;
            case 'chasse au trésor':
            const embed9 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`chasse au trésor\``, inline: true }, {name: 'Commentaire', value: 'Je pensait le rajouter quand on auras une maison de CL. Sinon sa va être compliqué.'})
                .setTimestamp()
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
                message.channel.send({ embeds: [embed9] });
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

        const roulette = ['Cartes aux trésors', 'Cache cache', 'Déguisement (thème)', 'Déguisement (couleur)', 'Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)', 'Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)', 'Donjons avec nos pire classe', 'Défi niveau max (des gens present) sans le cristal de job', 'chasse au trésor'];
        
        const randomRoulette = Math.floor(Math.random()*roulette.length);
        const rRandomRoulette = roulette[randomRoulette];

        const color = ['Noir', 'Blanc', 'Bleu', 'Jaune', 'Rouge', 'Violet', 'Vert', 'Orange', 'Gris', 'Rose'];

        const randomColor = Math.floor(Math.random()*color.length);
        const cRandomColor = color[randomColor];

        const theme = ['Gothic', 'Dessin Animé', 'Aristo', 'Animaux', 'Princesse/Prince', 'Transgenre', 'Décontracté', 'Moche', 'Power Rangers !', 'Tribal', 'Maillot de bain', 'Perso jeu video']

        const randomTheme = Math.floor(Math.random()*color.length);
        const tRandomTheme = theme[randomTheme];


        switch(rRandomRoulette) {
            case 'Cartes aux trésors':
            const embed1 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Cartes aux trésors\``, inline: true })
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed1] });
            break;
            case 'Cache cache':
            const embed2 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Cache cache\``, inline: true })
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed2] });
            break;
            case 'Déguisement (thème)':
            const embed3 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Déguisement (thème)\``, inline: true }, {name : 'Thème', value: `\`${tRandomTheme}\``})
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed3] });
                break;
            case 'Déguisement (couleur)':
            const embed4 = new MessageEmbed()
            .setTitle('🎡 Roulette')
            .setThumbnail(client.user.displayAvatarURL())
            .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
            .addFields({ name: "Nom de l'événement", value: `\`Déguisement (couleur)\``, inline: true }, cRandomColor === "Rose" ? {name: "Commentaire", value: "Pas de Rose !!! SVP (oh si si démo en rose on veut voir ça !)", inline: true} : undefined, {name: "Couleur", value:`\`${cRandomColor}\``})
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed4] });
            break;
            case 'Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)':
            const embed5 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Speedrun palais des morts (2 équipes de 4, la premiere à finir la tranche 10 lvls gagne)\``, inline: true })
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed5] });
            break;
            case 'Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)':
            const embed6 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Speedrun pillier des cieux (2 équipes de de 4), la premiere a finir la tranche de 10 lvls gagne)\``, inline: true })
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed6] });
            break;
            case 'Donjons avec nos pire classe':
            const embed7 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Donjons avec nos pire classe\``, inline: true })
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed7] });
            break;
            case 'Défi niveau max (des gens present) sans le cristal de job':
            const embed8 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`Défi niveau max (des gens present) sans le cristal de job\``, inline: true }, {name: 'Commentaire', value: 'Ne marche que sur les classes ARR'})
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed8] });
            break;
            case 'chasse au trésor':
            const embed9 = new MessageEmbed()
                .setTitle('🎡 Roulette')
                .setThumbnail(client.user.displayAvatarURL())
                .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
                .addFields({ name: "Nom de l'événement", value: `\`chasse au trésor\``, inline: true }, {name: 'Commentaire', value: 'Je pensait le rajouter quand on auras une maison de CL. Sinon sa va être compliqué.'})
                .setTimestamp()
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
                interaction.reply({ embeds: [embed9] });
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
    
        // const embed = new MessageEmbed()
        // .setTitle('🎡 Roulette')
        // .setThumbnail(client.user.displayAvatarURL())
        // .setImage('https://upload.wikimedia.org/wikipedia/commons/9/96/Roulette-finlandsfarja.jpg')
        // .addFields({ name: "Nom de l'événement", value: `\`${rRandomRoulette}\``, inline: true })
        // .addFields()
        // .setTimestamp()
        // .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        // interaction.reply({ embeds: [embed] })
    }
};