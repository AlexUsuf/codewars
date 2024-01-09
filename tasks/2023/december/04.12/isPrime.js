function isPrime(n) {
    const root = n ** 0.5;
    for (let i = 2; i <= root; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

module.exports = isPrime;