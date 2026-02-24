const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize
    .authenticate()
    .then(() => {
        console.log('----- Banco de dados conectado!');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`----- Servidor rodando em http://localhost:${PORT}`);
            console.log(`----- Swagger disponível em http://localhost:${PORT}/docs`);
        });
    })
    .catch((err) => {
        console.error('----- Erro ao conectar ao banco:', err);
    });