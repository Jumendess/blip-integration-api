const express = require('express');
const { getRepositories } = require('../controllers/repositoryController');
const router = express.Router();

router.get('/', getRepositories); // Define a rota para obter os repositórios

module.exports = router;
