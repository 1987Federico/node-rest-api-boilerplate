const express = require('express');

const router = express.Router();
const controllerUser = require('../controllers/controllerUser');

router.get('/', controllerUser.getUser);


module.exports = router;
