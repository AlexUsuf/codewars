function isAgeDiverse(list) {
    const obj = {
        '10': 0,
        '20': 0,
        '30': 0,
        '40': 0,
        '50': 0,
        '60': 0,
        '70': 0,
        '80': 0,
        '90': 0,
        '100': 0
    }
    for (const dev of list) {
        if (dev.age > 9 && dev.age < 20) {
            obj[10] += 1;
        }
        if (dev.age > 19 && dev.age < 30) {
            obj[20] += 1;
        }
        if (dev.age > 29 && dev.age < 40) {
            obj[30] += 1;
        }
        if (dev.age > 39 && dev.age < 50) {
            obj[40] += 1;
        }
        if (dev.age > 49 && dev.age < 60) {
            obj[50] += 1;
        }
        if (dev.age > 59 && dev.age < 70) {
            obj[60] += 1;
        }
        if (dev.age > 69 && dev.age < 80) {
            obj[70] += 1;
        }
        if (dev.age > 79 && dev.age < 90) {
            obj[80] += 1;
        }
        if (dev.age > 89 && dev.age < 100) {
            obj[90] += 1;
        }
        if (dev.age > 99) {
            obj[100] += 1;
        }
    }
    return Object.values(obj).every(el => el >= 1);
}
module.exports = isAgeDiverse;