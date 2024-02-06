def repeats(arr):
    result = 0
    for i in arr:
        if arr.count(i) == 1:
            result += i
    return result