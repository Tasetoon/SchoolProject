from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy



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

@app.route("/home/form-test", methods = ['GET'])
def formtest_page():
    isPut = False
    if request.method == 'POST':
        value1 = int(request.get_json().get('val1'))
        value2 = int(request.get_json().get('val2'))
        print('Value 1 = ',value1)
        print('Value 2 = ',value2)
        
        if value1 and value2:
            isPut = True
            response = jsonify(
                {
                'value1': value1,
                'value2': value2,
                'sum = ': value1+value2
                }
            )
            return response
        else:
            response = jsonify(
                {
                'Message': 'Failed'
                }
            )
            return response
    else:
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

if __name__ == "__main__":
    app.run(debug=True, port=8080)