// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User-related routes

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/user/edit/:id', userController.editUser);
router.delete('/user/delete/:id', userController.deleteUser);

module.exports = router;
