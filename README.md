````markdown
# API de Repositórios do GitHub

Esta API permite buscar repositórios públicos do GitHub escritos em C#. Ela retorna os 5 repositórios mais recentes, ordenados pela data de criação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para criação de APIs.
- **Axios**: Cliente HTTP para requisições à API do GitHub.
- **Winston**: Biblioteca para log.
- **Swagger**: Documentação interativa da API.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Jest**: Framework para testes automatizados.
- **Supertest**: Biblioteca para testar APIs HTTP.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Jumendess/blip-integration-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd blip-integration-api/api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```bash
   GITHUB_API_URL=https://api.github.com/orgs/takenet/repos
   GITHUB_TOKEN=seu_token_aqui
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

   Isso fará com que a API seja iniciada na porta `3000` (ou outra porta definida pela variável de ambiente `PORT`).

## Endpoints

### 1. Obter Repositórios C# do GitHub

- **URL**: `/repositorios`
- **Método**: `GET`
- **Descrição**: Retorna os 5 repositórios mais recentes escritos em C#.

#### Exemplo de Resposta

```json
[
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/1234567?v=4",
    "name": "takenet/repo1",
    "description": "Repositório de exemplo 1"
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/7654321?v=4",
    "name": "takenet/repo2",
    "description": "Repositório de exemplo 2"
  }
]
```
````

### 2. Documentação da API (Swagger)

A documentação interativa da API gerada pelo Swagger pode ser acessada no seguinte endpoint:

- **URL**: `/api-docs`

Para acessar, basta navegar até `http://localhost:3000/api-docs` (ou a URL correspondente no seu ambiente).

### Exemplo de Teste com o Swagger

1. Abra o Swagger em `http://localhost:3000/api-docs`.
2. Clique no botão "Try it out" na seção **GET /repositorios**.
3. Clique em "Execute" para fazer a requisição e visualizar a resposta diretamente no Swagger.

## Testes

Você pode rodar os testes automatizados utilizando o Jest, que está configurado no projeto. Para rodar os testes, execute o seguinte comando:

```bash
npm test
```

Isso irá executar os testes definidos no diretório `__tests__` (se houver). O Jest irá verificar a API e fornecer o resultado dos testes no console.

## Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias:

- **GITHUB_API_URL**: URL da API do GitHub (padrão: `https://api.github.com/orgs/takenet/repos`).
- **GITHUB_TOKEN**: Seu token de autenticação da API do GitHub.

## Logs de Erros

Os erros são registrados tanto no console quanto no arquivo `logs/app.log`. Se ocorrer um erro ao fazer a requisição à API do GitHub, o erro será mostrado no log e será retornado como resposta com o status `500`.

## Como Contribuir

1. Faça um **fork** deste repositório.
2. Crie uma branch para a sua feature:

   ```bash
   git checkout -b feature/novo-recurso
   ```

3. Faça commit das suas alterações:

   ```bash
   git commit -am 'Adiciona novo recurso'
   ```

4. Envie suas mudanças para o seu fork:

   ```bash
   git push origin feature/novo-recurso
   ```

5. Abra um Pull Request para o repositório principal.
