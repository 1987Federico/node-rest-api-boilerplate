const express = require('express');

const router = express();

router.use('/', require('./routerUser'));

module.exports = router;
