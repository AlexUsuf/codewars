from sum_of_odd_numbs import row_sum_odd_numbers

def test_row_sum_odd_numbers():
    assert(row_sum_odd_numbers(1)) == 1
    assert(row_sum_odd_numbers(2)) == 8
    assert(row_sum_odd_numbers(13)) == 2197