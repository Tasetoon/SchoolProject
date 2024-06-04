from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

from functions import Archimedes1, Archimedes2, Archimedes3

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
    if arr[0] == 'P' and arr[1] == 'V':
        return jsonify({
            'result': Archimedes1()
        })
    elif arr[0] == 'F' and arr[1] == 'V':
        return jsonify({
            'result': Archimedes2()
        })
    elif  arr[0] == 'P' and arr[1] == 'F':
        return jsonify({
            'result': Archimedes3()
        })
    return jsonify({
            'Message': 'No Data'
        })

@app.route("/home/constants", methods=['GET'])
def Consts():
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
if __name__ == "__main__":
    app.run(debug=True, port=8080)