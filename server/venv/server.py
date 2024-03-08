from flask import Flask, jsonify
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods = ['GET'])
def home_page():
    return jsonify({
        'message': 'fuck u',

        'dict' : {
            'name': 'Philip',
            'age' : 16,
            'login': "admin"
        }
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)