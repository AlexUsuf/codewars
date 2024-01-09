def is_valid_walk(walk):
    object = {
        'w': 0,
        'e': 0,
        's': 0,
        'n': 0
    }
    for i in walk:
        object[i] += 1
    return len(walk) == 10 and object['w'] == object['e'] and object['s'] == object['n']