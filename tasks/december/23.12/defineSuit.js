function defineSuit(card) {
    const lastElement = card[card.length - 1]
    const obj = {
        '♥': 'hearts',
        '♠': 'spades',
        '♦': 'diamonds',
        '♣': 'clubs'
    }
    return obj[lastElement]
}

module.exports = defineSuit;