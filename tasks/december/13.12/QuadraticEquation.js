function isPythagoreanTriple(int) {
    const doubleArr = int.slice().sort((a, b) => a - b);
    return doubleArr[0] ** 2 + doubleArr[1] ** 2 === doubleArr[2] ** 2;
}


module.exports = isPythagoreanTriple;