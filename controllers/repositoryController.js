const githubService = require('../services/githubService');
const winston = require('winston');

const getRepositories = async (req, res) => {
  try {
    const repos = await githubService.getCSharpRepositories(); // Chama o serviço para buscar repositórios C#
    if (repos.length === 0) {
      return res.status(404).json({ message: 'Nenhum repositório encontrado' }); // Retorna 404 se não houver repositórios
    }
    res.status(200).json(repos); // Retorna os repositórios se encontrados
  } catch (error) {
    winston.error(`Erro ao buscar repositórios: ${error.message}`); // Registra o erro no Winston
    res.status(500).json({ message: 'Erro interno do servidor' }); // Retorna 500 em caso de erro interno
  }
};

module.exports = { getRepositories };
