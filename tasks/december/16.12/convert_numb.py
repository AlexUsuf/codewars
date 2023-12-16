def digitize(n):
    reversedString = str(n)[::-1]
    listNumbers = list(reversedString)
    result = list(map(int, listNumbers))
    return result