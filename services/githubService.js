// githubService.js
require('dotenv').config();
const axios = require('axios');

const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com/orgs/takenet/repos';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const getCSharpRepositories = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

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

module.exports = { getCSharpRepositories };
