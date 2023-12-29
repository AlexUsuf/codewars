from walk.py import is_valid_walk
list1 = ['n','s','n','s','n','s','n','s','n','s']
list2 = ['n','s','n','s','n','s','n','s','n']
def test_is_valid_walk():
    assert(is_valid_walk(list1)) == True
    assert(is_valid_walk(list2)) == False