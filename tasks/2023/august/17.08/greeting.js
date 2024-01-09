function greetDevelopers(list) {
    for (const x of list) {
        x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`;
    }
    return list;
}


module.exports = greetDevelopers;