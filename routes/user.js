const cUser = require('../controller/cUser');
const express = require('express');
const router = express.Router();


router.get('/', cUser.findUser);
router.post('/', cUser.addUser);

module.exports = router;