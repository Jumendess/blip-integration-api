// repositoryRoutes.js
const express = require('express');
const { getRepositories } = require('../controllers/repositoryController');
const router = express.Router();

// Define a rota para obter os repositórios
router.get('/', getRepositories);

module.exports = router;
