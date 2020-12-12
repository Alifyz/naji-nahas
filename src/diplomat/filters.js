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

function filterMetadata(value) {
    return value.name !== "Cód. Negociação";
}


module.exports.filterBonds = filterBonds;
module.exports.filterShares = filterShares;
module.exports.filterEmptyCells = filterEmptyCells;
module.exports.filterMetadata = filterMetadata;