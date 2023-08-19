function getAverageAge(list) {
    let summaryAge = 0;
    let count = 0;
    list.map(dev => {
        summaryAge += dev.age;
        count += 1;
    });
    return Math.round(summaryAge / count);
}
module.exports = getAverageAge;