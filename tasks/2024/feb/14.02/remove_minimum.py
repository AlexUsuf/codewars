def remove_smallest(numbers):
    result = []
    count = 0
    sorted_list = sorted(numbers)
    print(sorted_list)
    for i in numbers:
        if i == sorted_list[0] and count == 0:
            count += 1
            continue
        result.append(i)
    return result