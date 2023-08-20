function order(words) {
    return words.split(' ').sort((a, b) => a.match(/[0-9]/gi) - b.match(/[0-9]/gi)).join(' ');
}

module.exports = order;