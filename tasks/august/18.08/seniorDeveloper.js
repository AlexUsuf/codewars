function findSenior(list) {
    const sortedArray = list.sort((a, b) => b.age - a.age);
    return sortedArray.filter(develop => develop.age === sortedArray[0].age);
}

module.exports = findSenior;