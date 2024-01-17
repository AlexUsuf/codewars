from how_many_smaller import smaller

def test_smaller():
    assert(smaller([5, 4, 3, 2, 1])) == [4, 3, 2, 1, 0]
    assert(smaller([1, 2, 3])) == [0, 0, 0]