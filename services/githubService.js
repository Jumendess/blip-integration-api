require('dotenv').config();

const axios = require('axios');

// URL da API do GitHub, que já deve estar definida na variável de ambiente
const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com/orgs/takenet/repos';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;  // Variável de ambiente com o token

// Função para buscar repositórios C#
const getCSharpRepositories = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        // Autenticando com o token
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    // Filtra repositórios com linguagem C# e retorna os 5 mais recentes
    return response.data
      .filter(repo => repo.language === 'C#')
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .slice(0, 5)
      .map(repo => ({
        avatar_url: repo.owner.avatar_url,
        name: repo.full_name.replace('takenet/', ''),
        description: repo.description,
      }));
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error.message);
    throw new Error('Erro interno do servidor');
  }
};
