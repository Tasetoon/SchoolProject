from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from init_database import init_database

from functions import Archimedes_F, Archimedes_P, Archimedes_V
from functions import EPosential_E, EPosential_H, EPosential_M
from functions import EKinetic_E, EKinetic_M, EKinetic_V

app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})
    
@app.route("/home", methods = ['GET'])
def home_page():
    return jsonify({
        'message': "home page"
    })
    

@app.route("/home/test", methods = ['GET'])
def page():
    result = []
    connection = init_database()
    cur =  connection.cursor()
    cur.execute("SELECT name, value FROM bodyDensityConstants")
    data = cur.fetchall()
    for tmp in data:
        name = tmp[0]
        value = tmp[1]
        result.append(name+' '+str(value))
    print(result)
    return jsonify({
        'result': result 
    })

@app.route("/home/form", methods = ['GET'])
def formtest_page():
    value1 = request.args.get('val1')
    value2 = request.args.get('val2')
    if value1 and value2:

        print('multiplication = ', int(value1)*int(value2))
        return jsonify({
            'multiplication': int(value1)*int(value2)
        })
    else:
        return jsonify({
            'Message': 'No Data'
        })
@app.route("/home/problem", methods = ['GET'])
def ProblemPage():
    x = request.args.keys()
    print(x)
    arr = []
    for i in x:
        arr.append(i)
#--------------------------------------------ARCHIMEDES-------------------------------------------------------
    if arr[0] == 'P' and arr[1] == 'V':
        return jsonify({
            'result': Archimedes_F()
        })
    elif arr[0] == 'F' and arr[1] == 'V':
        return jsonify({
            'result': Archimedes_P()
        })
    elif  arr[0] == 'P' and arr[1] == 'F':
        return jsonify({
            'result': Archimedes_V()
        })
# --------------------------------------------MOMENTS-----------------------------------------------------------------
    elif arr[0] == 'F1' and arr[1] == 'L1' and arr[2] == 'F2':
        return jsonify({
            
        })
    
#--------------------------------------------E_POTENTIAL--------------------------------------------------------
    elif  arr[0] == 'M' and arr[1] == 'H':
        return jsonify({
            'result': EPosential_E()
        })
    elif  arr[0] == 'E' and arr[1] == 'H':
        return jsonify({
            'result': EPosential_M()
        })
    elif  arr[0] == 'E' and arr[1] == 'M':
        return jsonify({
            'result': EPosential_H()
        })
    


#--------------------------------------------E_KINETIC--------------------------------------------------------
    elif  arr[0] == 'M' and arr[1] == 'V':
        return jsonify({
            'result': EKinetic_E()
        })
    elif  arr[0] == 'E' and arr[1] == 'M':
        return jsonify({
            'result': EKinetic_V()
        })
    elif  arr[0] == 'E' and arr[1] == 'V':
        return jsonify({
            'result': EKinetic_M()
        })
    return jsonify({
        'Message': 'No Data'
    })

#-------------------------------------------------------------------------------------------------------------
#--------------------------------------------CONSTANTS--------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------


@app.route("/home/constants", methods=['GET'])
def Consts():
    type = request.args.get('type')
    if type == 'liquids_density':
        result = []
        connection = init_database()
        cur =  connection.cursor()
        cur.execute("SELECT name, value FROM LiquidDensityConstants")
        data = cur.fetchall()
        for tmp in data:
            name = tmp[0]
            value = tmp[1]
            result.append(name+' '+str(value))
        print(result)
        return jsonify({
            'result': result 
        })
    elif type == 'bodies_density':
        result = []
        connection = init_database()
        cur =  connection.cursor()
        cur.execute("SELECT name, value FROM BodyDensityConstants")
        data = cur.fetchall()
        for tmp in data:
            name = tmp[0]
            value = tmp[1]
            result.append(name+' '+str(value))
        print(result)
        return jsonify({
            'result': result 
        })

if __name__ == "__main__":
    app.run(debug=True, port=8080)