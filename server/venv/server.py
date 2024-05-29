from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON




# app instance
db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

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
     return jsonify({
        'message': "form-test page"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)