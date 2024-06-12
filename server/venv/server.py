from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

from functions import Archimedes_F, Archimedes_P, Archimedes_V
from functions import EPosential_E, EPosential_H, EPosential_M
from functions import EKinetic_E, EKinetic_M, EKinetic_V
# app instance
db = SQLAlchemy()

app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/postgres'
db = SQLAlchemy(app)

class LiquidDensityConstant(db.Model):  
    __tablename__ = 'LiquidDensityConstants'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.Text)
    value = db.Column(db.Integer)

class BodyDensityConstant(db.Model):  
    __tablename__ = 'BodyDensityConstants'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.Text)
    value = db.Column(db.Integer)
    
@app.route("/home", methods = ['GET'])
def home_page():
    return jsonify({
        'message': "home page"
    })
    

@app.route("/home/test", methods = ['GET'])
def page():
    cur = db.session.query(LiquidDensityConstant).filter(LiquidDensityConstant.id==1)
    for i in cur:
        name = i.name
        value = i.value
    print(name, value)
    return jsonify({
        'name': name,
        'value': value
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
        cur = db.session.query(LiquidDensityConstant)
        for i in cur:
            name = i.name
            value = i.value
            result.append(name+' '+str(value))
        print(result)
        return jsonify({
            'result': result 
        })
    elif type == 'bodies_density':
        result = []
        cur = db.session.query(BodyDensityConstant)
        for i in cur:
            name = i.name
            value = i.value
            result.append(name+' '+str(value))
        print(result)
        return jsonify({
            'result': result 
        })

if __name__ == "__main__":
    app.run(debug=True, port=8080)