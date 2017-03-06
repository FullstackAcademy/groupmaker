'use strict';

const { Router } = require('express');
const router = module.exports = Router();

router.use('/', (req, res) => {
  res.sendStatus(200);
});
