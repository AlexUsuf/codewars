from every import all
greater_than_9 = lambda x: x>9
less_than_9 = lambda x: x<9

def test_all():
    assert(all((1,2,3), greater_than_9)) == False
    assert(all((1,2,3), less_than_9)) == True
    