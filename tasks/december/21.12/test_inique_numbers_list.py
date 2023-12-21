from inique_numbers_list import unique

def test_unique():
    assert(unique([1,1,2])) == [1, 2]
    assert(unique([-1,-1,2])) == [-1, 2]
    assert(unique(['-1','-1',2])) == ['-1', 2]