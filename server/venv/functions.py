from flask import request

def Archimedes_F():
    P = request.args.get('P')
    V = request.args.get('V')
    if P and V:
        P = float(P)
        V = float(V)
        result = round(P*V*10,2)
        return result
    else:
        return 'No Data'
def Archimedes_P():
    F = request.args.get('F')
    V = request.args.get('V')
    if F and V:
        F = float(F)
        V = float(V)
        result = round(F/(10*V),2)
        return result
    else:
        return 'No Data'
def Archimedes_V():
    P = request.args.get('P')
    F = request.args.get('F')
    if P and F:
        P = float(P)
        F = float(F)
        result = round(F/(10*P),2)
        return result
    else:
        return 'No Data'
    
def EPosential_E():
    M = request.args.get('M')
    H = request.args.get('H')
    if M and H:
        M = float(M)
        H = float(H)
        result = round(M*H*10,2)
        return result
    else:
        return 'No Data'
    
def EPosential_M():
    E = request.args.get('E')
    H = request.args.get('H')
    if E and H:
        E = float(E)
        H = float(H)
        result = round(E/(10*H),2)
        return result
    else:
        return 'No Data'
    
def EPosential_H():
    E = request.args.get('E')
    M = request.args.get('M')
    if E and M:
        E = float(E)
        M = float(M)
        result = round(E/(10*M),2)
        return result
    else:
        return 'No Data'
    
def EKinetic_E():
    M = request.args.get('M')
    V = request.args.get('V')
    if M and V:
        V = float(V)
        M = float(M)
        result = round((M*V**2)/2,2)
        return result
    else:
        return 'No Data'
    
def EKinetic_M():
    E = request.args.get('E')
    V = request.args.get('V')
    if E and V:
        V = float(V)
        E = float(E)
        result = round((E*2)/V**2,2)
        return result
    else:
        return 'No Data'
    
def EKinetic_V():
    E = request.args.get('E')
    M = request.args.get('M')
    if E and M:
        M = float(M)
        E = float(E)
        result = round(((E*2)/M)**0.5,2)
        return result
    else:
        return 'No Data'
    
def Moments():
    M = request.args.get('E')
    M = request.args.get('M')

    if E and M:
        M = float(M)
        E = float(E)
        result = round(((E*2)/M)**0.5,2)
        return result
    else:
        return 'No Data'