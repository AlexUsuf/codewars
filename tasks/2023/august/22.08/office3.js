function broken(x) {
    if(!x) {
        return '';
    }
    const object = {
        "0": "1",
        "1": "0"
    }
    return x.replace(/./gi, letter => object[letter]);
}

module.exports = broken;