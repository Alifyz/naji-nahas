const scrapper = require('../core/scrapper');
const validator = require('../core/common/validators');

module.exports = {
    async fetch(ctx) {
        const { body } = ctx.request;
        
        const cpf = body.cpf;
        const password = body.password;
        const userId = body.userId;

        if (!validator.isValid(cpf, password)) {
            ctx.throw(400, 'Dados inconsistentes');
        }

        ctx.body = {
            message: 'Solicitação enviada com sucesso!',
            lastUpdate: Date.now()
        };

        scrapper.extractData(cpf, password, userId);
    }
};