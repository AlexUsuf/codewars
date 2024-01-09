function countArara(n) {
    let result = '';
    for (let i = 2; i <= n; i += 2) {
        result += 'adak ';
    }
    if (n % 2 !== 0) {
        result += 'anane';
    }
    return result.trim();
}

module.exports = countArara;