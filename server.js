require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const GITHUB_API_URL = process.env.GITHUB_API_URL;

app.get('/repositorios', async (req, res) => {
    try {
        const { data } = await axios.get(GITHUB_API_URL);
        const csharpRepos = data
            .filter(repo => repo.language === 'C#')
            .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
            .slice(0, 5);

        const result = csharpRepos.map(repo => ({
            avatar_url: repo.owner.avatar_url,
            name: repo.full_name,
            description: repo.description,
        }));

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao obter repositórios' });
    }
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
