const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdfile => {
        const cmd = require(cmdfile);
        console.log(cmd.name, cmd);
        client.commands.set(cmd.name, cmd);
    });
};
