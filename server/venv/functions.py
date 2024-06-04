from flask import request

def Archimedes1():
    P = request.args.get('P')
    V = request.args.get('V')
    if P and V:
        P = float(P)
        V = float(V)
        result = round(P*V*10,2)
        return result
    else:
        return 'No Data'
def Archimedes2():
    F = request.args.get('F')
    V = request.args.get('V')
    if F and V:
        F = float(F)
        V = float(V)
        result = round(F/(10*V),2)
        return result
    else:
        return 'No Data'
def Archimedes3():
    P = request.args.get('P')
    F = request.args.get('F')
    if P and F:
        P = float(P)
        F = float(F)
        result = round(F/(10*P),2)
        return result
    else:
        return 'No Data'