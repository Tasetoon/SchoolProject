from flask import Flask, jsonify


# app instance
app = Flask(__name__)

@app.route("/api/home", methods = ['GET'])
def home_page():
    return jsonify({
        'message': 'Home page'
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)