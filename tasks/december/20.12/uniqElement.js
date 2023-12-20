const uniqEl = (arr) => {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))[0];
}

module.exports = uniqEl;