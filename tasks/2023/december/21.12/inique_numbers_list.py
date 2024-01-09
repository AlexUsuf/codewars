def unique(arr):
    unique = []
    for i in arr:
        if i not in unique:
            unique.append(i)
    return unique