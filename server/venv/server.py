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

class Formule(db.Model):
    __tablename__ = 'formules'
    id = db.Column(db.Integer,primary_key=True)
    main_component = db.Column(db.CHAR)
    term = db.Column(JSON)

@app.route("/api/home", methods = ['GET'])
def home_page():
    cur = db.session.query(Formule).filter(Formule.id==1)
    for i in cur:
        res = i.main_component
        trm = i.term
    return jsonify({
        'main_component': res,
        'json': trm
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)