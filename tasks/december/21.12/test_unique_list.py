from unique_list import uniq

def test_uniq():
    assert(uniq([1,1,2])) == [1, 2]
    assert(uniq([-1,-1,2])) == [2, -1]
