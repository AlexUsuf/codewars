function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => el === true).length;
}

module.exports = countSheeps;