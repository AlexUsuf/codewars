def is_prime(n):
    root = int(n ** 0.5)
    for i in range(2, root + 1):
        print(i)
        if n % i == 0:
            return False
    return n > 1