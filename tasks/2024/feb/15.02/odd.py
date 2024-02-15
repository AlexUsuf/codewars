def odd_ones_out(numbers):
    result = []
    obj = {}
    for i in numbers:
        obj[i] = 0
    for i in numbers:
        obj[i] += 1
    for i in numbers:
        if obj[i] % 2 == 0:
            result.append(i)
    return result