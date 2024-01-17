def all(seq, fun): 
    for i in seq:
        if(fun(i) == False):
            return False
    return True