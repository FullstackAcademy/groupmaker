'use strict';

const Sequelize = require('sequelize');
const chalk     = require('chalk');
const debug     = require('debug');
const { exec }  = require('child_process');

const {
  dbName, dbUrl, isProduction, isTesting, name
} = require('../../index');

const debugDb   = debug(`${name}:db`);
const debugSql  = debug('sql');

const db = module.exports = new Sequelize(dbUrl, {
  logging: debugSql,
  define : {
    underscored    : true,
    freezeTableName: true,
    timestamps     : true
  }
});

function sync(retries = 0, maxRetries = 5, force = isTesting) {
  return db.sync({force})
    .then(() => debugDb(`Synced models to db ${dbUrl}`))
    .catch(err => {
      if (retries >= maxRetries) {
        console.error(chalk.red('******* database error *******'));
        console.error(chalk.red(` couldn't connect to ${dbUrl}`));
        console.error('\n', chalk.red(err));
        console.error(chalk.red('******************************'));
        return;
      }

      debugDb(`${retries ? `[retry no. ${retries}]` : ''} Creating database ${dbName}...`);
      return new Promise((resolve) => exec(`createdb "${dbName}"`, resolve))
        .then(() => sync(retries + 1));
    });
}

db.didSync = isProduction ? Promise.resolve(db) : sync();
