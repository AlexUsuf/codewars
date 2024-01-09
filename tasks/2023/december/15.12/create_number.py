def create_phone_number(n):
    result = '(xxx) xxx-xxxx'
    for i in n:
        print(i, result)
        result = result.replace('x', f'{i}', 1)
    return result