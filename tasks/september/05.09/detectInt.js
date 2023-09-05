function detectInt(...arr) {
    if (arr.length == false) {
        return 1;
    }
    let counter = 0;
    while (++counter) {  //i++ i – до приращения          ++i – после приращения
        if (arr.every(el => el(counter))) {
            return counter;
        }
    }
}

module.exports = detectInt;