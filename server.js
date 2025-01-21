require('dotenv').config();

const express = require('express');
const winston = require('winston');
const repositoryRoutes = require('./routes/repositoryRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Winston para registrar logs no console e no arquivo
winston.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

winston.add(new winston.transports.File({
  filename: 'logs/app.log',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
}));

// Definir as rotas
app.use('/repositorios', repositoryRoutes);

// Iniciar o servidor apenas quando não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    winston.info(`API rodando na porta ${PORT}`);
  });
}

// Exportar o app para uso em testes
module.exports = app;
