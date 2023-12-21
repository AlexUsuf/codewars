from unique_constant import count_consonants

def test_count_consonants():
    assert(count_consonants('aeiou')) == 0
    assert(count_consonants('sillystring')) == 7
    assert(count_consonants('Count my unique consonants!!')) == 7