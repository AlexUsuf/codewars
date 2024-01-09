function toCamelCase(str) {
    const array = str.split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '-' || array[i] === '_') {
            array[i] = '';
            array[i + 1] = array[i + 1].toUpperCase();
        }
    }
    return array.join('');
}


module.exports = toCamelCase;