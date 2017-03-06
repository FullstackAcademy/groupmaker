'use strict';

const app = require('./');
const chalk = require('chalk');
const pkg = require('../package.json');

const server = module.exports = app.listen(
  process.env.PORT || 3333,
  () => {
    const { address, port } = server.address();
    const host = address === '::' ? 'localhost' : address;
    const urlSafeHost = host.includes(':') ? `[${host}]` : host;
    console.log(chalk.green(`--- Started HTTP Server for ${pkg.name} version ${pkg.version} ---`));
    console.log(chalk.green(`Listening on http://${urlSafeHost}${port === 80 ? '' : `:${port}`}`));
  }
);
