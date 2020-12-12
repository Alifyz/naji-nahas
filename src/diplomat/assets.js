const filters = require('./filters');

function parseAssets(data) {
    var extractedShares = [];
    var extractedBonds = [];

    //Initial Filters
    let shares = data.filter(filterShares);
    let bonds = data.filter(filterBonds);

    //Formatting
    shares.map((item) => {
        let metadata = item.split('\t');
        extractedShares.push({
            name: metadata[0],
            ticker: metadata[2],
            price: metadata[4],
            quantity: metadata[5],
            total: metadata[7]
        });
    });

    bonds.map((item) => {
        let metadata = item.split('\t');
        extractedBonds.push({
            name: metadata[0],
            pv: metadata[2],
            fv: metadata[4],
            date: metadata[1]
        });
    });

    //Clean Up
    extractedShares = extractedShares.filter(filterEmptyCells);

    return {
        shares: extractedShares,
        bonds: extractedBonds
    };
}

function parseBalance(rawBalance) {
    let extractedBalance = rawBalance.split('\n');
    let balance = [];

    //Clean up
    extractedBalance.shift();
    let parsedBalance = extractedBalance.filter(filterEmptyCells);

    //Formatting
    parsedBalance.map((item) => {
        let metadata = item.split('\t');
        let assetName = metadata[0];
        let assetValuation = metadata[1];
        if (assetValuation != undefined) {
            balance.push({
                category: {
                    name: assetName,
                    value: assetValuation
                }
            });
        }
    })

    return balance;
}


function filterBonds(value) {
    return value.startsWith("Tesouro");
}

function filterShares(value) {
    let table = value.split('\t');
    return table[0].match(/^[A-Z]*$/);
}

function filterEmptyCells(value) {
    return value.name !== "";
}

module.exports.parseAssets = parseAssets;
module.exports.parseBalance = parseBalance;