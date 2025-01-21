const githubService = require('../services/githubService');
const winston = require('winston');

const getRepositories = async (req, res) => {
  try {
    const repos = await githubService.getCSharpRepositories();
    if (repos.length === 0) {
      return res.status(404).json({ message: 'Nenhum repositório encontrado' }); repositórios
    }
    res.status(200).json(repos); // Retorna os repositórios se encontrados
  } catch (error) {
    winston.error(`Erro ao buscar repositórios: ${error.message}`);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

module.exports = { getRepositories };
