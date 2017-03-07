'use strict';

const api = require('./api');
const { Router } = require('express');

const router = module.exports = Router();

router.use('/api', api);
