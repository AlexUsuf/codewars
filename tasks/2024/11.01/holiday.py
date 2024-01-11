def sea_sick(sea):
    waves_len = len(sea.split('_~')) - 1
    calm_len = len(sea.split('~_')) - 1
    sum_change = waves_len + calm_len
    print(sum_change)
    if sum_change / len(sea) > 0.2:
        return "Throw Up"
    return 'No Problem'