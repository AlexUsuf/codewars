from centure_from_year import century

def test_century():
    assert century(1800) == 18
    assert century(2001) == 21
    assert century(1803) == 19