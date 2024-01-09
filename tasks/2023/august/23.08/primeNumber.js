function isPrime(num) {
    if(num === undefined) {
        return false;
    }
    const root = num ** 0.5;
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num >= 2;
}

module.exports = isPrime;
