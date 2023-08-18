function countLanguages(list) {
    const objLang = {};
    for (const dev of list) {
        if (objLang[dev.language] === undefined) {
            objLang[dev.language] = 0;
        }
        objLang[dev.language] += 1;
    }
    return objLang;
}

module.exports = countLanguages;