function isSameLanguage(list) {
    const arr = [];
    list.map(dev => arr.push(dev.language));
    const res = [...new Set(arr)];
    return res.length === 1;
}

module.exports = isSameLanguage;