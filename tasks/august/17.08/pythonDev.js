function getFirstPython(list) {
    let result = 'There will be no Python developers';
    for (const dev of list) {
        if (dev.language === 'Python') {
            result = `${dev.firstName}, ${dev.country}`;
            break;
        }
    }
    return result;
}

module.exports = getFirstPython;