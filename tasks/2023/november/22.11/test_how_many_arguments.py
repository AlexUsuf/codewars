from how_many_arguments import args_count

def test_args_count():
    assert args_count(1, 2) == 2
    assert args_count() == 0