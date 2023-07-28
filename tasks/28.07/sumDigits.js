function digitalRoot(n) {
    while( n > 9) {
        let temp = 0;
        String(n).split('').map(el => temp += +el);
        n = temp;
    }
    return n;
}


module.exports = digitalRoot;