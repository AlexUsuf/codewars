from needle_haystack import find_needle
haystack1 = ['3', '123124234', 'needle', 'world', 'hay', 2, '3', True, False]
haystack2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']
haystack3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]

def test_find_needle():
    assert(find_needle(haystack1)) == 'found the needle at position 2'
    assert(find_needle(haystack2)) == 'found the needle at position 5'
    assert(find_needle(haystack3)) == 'found the needle at position 30'