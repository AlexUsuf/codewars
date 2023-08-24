function primeFactors(n) {
    if (n === undefined) {
        return [];
    }
    const res = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0 && Number.isInteger(n / i)) {
            res.push(i);
            n /= i;
        }
    }
    return res;
}

function isPrime(num) {
    let root = num ** 0.5;
    for (let i = 2; i <= root; i++) {
        if (num % 2 === 0) {
            return false;
        }
    }
    return num >= 2;
} 

module.exports = primeFactors;