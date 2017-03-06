'use strict';

const {name} = require('./package.json');

const env           = process.env;
const port          = env.PORT || 3333;
const isTesting     = !!global.it;
const isProduction  = env.NODE_ENV === 'production';
const isDevelopment = env.NODE_ENV === 'development';
const baseUrl       = env.BASE_URL || `localhost:${port}`;
const dbName        = isTesting ? `${name}_test` : env;
const dbUrl         = env.DATABASE_URL || `postgress://localhost:5432/${dbName}`;

const appData = module.exports = {
  baseUrl,
  dbName,
  dbUrl,
  env,
  isDevelopment,
  isProduction,
  isTesting,
  port
};

appData.dbName = `${(env.DATABASE_NAME || name)}${appData.isTesting ? '_test' : ''}`;
