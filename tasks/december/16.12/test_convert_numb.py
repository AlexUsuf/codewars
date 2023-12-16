from convert_numb import digitize

def test_digitize():
    assert(digitize(321)) == [1, 2, 3]
    assert(digitize(0)) == [0]