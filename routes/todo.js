const cTodo = require('../controller/cTodo');
const express = require('express');
const router = express.Router();


router.get('/id', cTodo.findbyIdTodo);
router.post('/', cTodo.addTodo);
router.put('/id', cTodo.updatebyidTodo);
router.delete('/id', cTodo.deletebyidTodo);


module.exports = router;