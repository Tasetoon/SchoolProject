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

@app.route("/home/form-test", methods = ['POST'])
def formtest_page():
    print(request.get_json().get('val1'))
    value1 = int(request.get_json().get('val1'))
    value2 = int(request.get_json().get('val2'))
    print(value1, value2)
    
    if value1 and value2:
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

# @app.route("/middleware_test", methods = ['GET'])
# def test():
#     value = 'Test'
#     return f'value = {value}'

if __name__ == "__main__":
    app.run(debug=True, port=8080)