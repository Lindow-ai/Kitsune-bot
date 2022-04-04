const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdfile => {
        const cmd = require(cmdfile);

        if(!cmd.name) return console.log(`-----\nCommande non-chargée: pas de nom)\nFichier -> ${cmdfile}\n-----`);

        client.commands.set(cmd.name, cmd);
        console.log(`Commande chargée: ${cmd.name}`);
    });
};
