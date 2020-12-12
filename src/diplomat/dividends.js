const filters = require('./filters');

function parseDividends(rawDividends) {
    var extractedDividends = [];
    var parsedDividdends = [];
    rawDividends.filter(filters.filterShares);

    rawDividends.map((item) => {
        let metadata = item.split('\t');
        extractedDividends.push({
            name: metadata[2],
            date: metadata[3],
            value: metadata[7]
        });
    });

    parsedDividdends = extractedDividends.filter(filters.filterEmptyCells);
    parsedDividdends = parsedDividdends.filter(filters.filterMetadata);

    return parsedDividdends;
}


module.exports.parseDividends = parseDividends;