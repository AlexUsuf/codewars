function greetDevelopers(list) {
    const result = list;
    for (const dev of result) {
        dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    }
    return result;
}


module.exports = greetDevelopers;