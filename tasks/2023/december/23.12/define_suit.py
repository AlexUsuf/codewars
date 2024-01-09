def define_suit(card):
    obj = {
        'H': 'hearts',
        'S': 'spades',
        'D': 'diamonds',
        'C': 'clubs'
    }
    last_element = card[len(card) - 1]
    return obj[last_element]