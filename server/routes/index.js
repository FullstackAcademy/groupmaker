'use strict';

const api = require('./api');
const { Router } = require('axpress');

const router = module.exports = Router();

router.use('/api', api);
