def count_consonants(text):
    result = 0
    vowels = ['e', 'u', 'i', 'o', 'a']
    lower_unique_text = set(text.lower())
    for letter in lower_unique_text:
        if (letter not in vowels) and ord(letter) > 97 and ord(letter) < 123:
            result += 1
    return result