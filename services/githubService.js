require('dotenv').config();

const axios = require('axios');
const GITHUB_API_URL = process.env.GITHUB_API_URL;

const getCSharpRepositories = async () => {
  const { data } = await axios.get(GITHUB_API_URL);
  return data
    .filter(repo => repo.language === 'C#')
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .slice(0, 5)
    .map(repo => ({
      avatar_url: repo.owner.avatar_url,
      name: repo.full_name.replace('takenet/', ''),
      description: repo.description,
    }));
};

module.exports = { getCSharpRepositories };
