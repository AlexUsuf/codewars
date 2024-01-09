from opposite_number import opposite

def test_opposite():
    assert opposite(1) == -1
    assert opposite(-1) == 1
    assert opposite(0) == 0