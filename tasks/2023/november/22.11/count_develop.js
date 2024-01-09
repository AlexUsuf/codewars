function countDevelopers(list) {
    return list.filter(develop => develop.language == 'JavaScript' && develop.continent == 'Europe').length
}

module.exports = countDevelopers;