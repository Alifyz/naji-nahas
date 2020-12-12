const assetsExtractor = require('./extractors/assets');
const dividendsExtractor = require('./extractors/dividends');
const repository = require('../repository/firebase');

async function extractData(cpf, password, userId) {
    const assets = await assetsExtractor.extractAssets(cpf, password);
    const balance = await assetsExtractor.extractBalance(cpf, password);
    const dividends = await dividendsExtractor.extractDividends(cpf, password);

    repository.saveData({
        assets: assets,
        balance: balance,
        dividends: dividends
    }, userId);
}

module.exports.extractData = extractData;