const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.post('/resource', UserController.postUser);

router.get('/resource', UserController.getUsers);

router.delete('/resource/:id', UserController.deleteUser);

module.exports = router;
