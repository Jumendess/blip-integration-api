# API Intermediária - Blip Chatbot

Esta API RESTful integra o chatbot da Blip com a API do GitHub para obter os 5 repositórios mais antigos da linguagem C# da organização Takenet.

## Endpoints

### `/repositorios`

- Método: GET
- Retorna:
  - `avatar_url`: URL do avatar.
  - `name`: Nome do repositório.
  - `description`: Descrição do repositório.

## Instalação e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```
