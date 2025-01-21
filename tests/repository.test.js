require('dotenv').config();

const request = require('supertest');
const app = require('../server');

describe('GET /repositorios', () => {
  it('should return a list of C# repositories', async () => {
    const response = await request(app).get('/repositorios');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a 404 status if no C# repositories are found', async () => {

    jest.spyOn(require('../services/githubService'), 'getCSharpRepositories').mockResolvedValue([]);

    const response = await request(app).get('/repositorios');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Nenhum repositório encontrado');
  });

  it('should return a 500 status for internal server errors', async () => {

    jest.spyOn(require('../services/githubService'), 'getCSharpRepositories').mockRejectedValue(new Error('Internal Server Error'));

    const response = await request(app).get('/repositorios');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro interno do servidor');
  });
});
