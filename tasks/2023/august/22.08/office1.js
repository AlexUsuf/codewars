function outed(meet, boss) {
    if(!meet || !boss) {
        return '';
    }
    const sum = (Object.values(meet).reduce((a, b) => a + b, 0) + meet[boss]) / Object.values(meet).length;
    return sum <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

module.exports = outed;