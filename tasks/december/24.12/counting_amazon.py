def count_arara(n):
    result = []
    for i in range(2, n + 1, 2):
        result.append('adak')
    if n % 2 != 0:
        result.append('anane')
    return ' '.join(result)