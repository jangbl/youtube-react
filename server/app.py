# pip install pytube3 --upgrade

from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS
# usage guide: https://flask-cors.readthedocs.io/en/latest/

app = Flask(__name__)
CORS(app)
app.config['CORS_SUPPORTS_CREDENTIALS'] = True
# https://stackoverflow.com/questions/61955973/issue-with-flask-cors-blocked-by-cors-policy-response-to-preflight-request-do
# https://github.com/corydolphin/flask-cors/issues/200
# app.config['CORS_HEADERS'] = 'Content-Type'

DUMMY_DICT = {
    'boat': [[5, 10], [30, 45]],
    'fish': [[15, 500]],
    'kite': [[15, 20], [50, 80]],
    'chair': [[60, 200]]
}


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/bookmarks/', methods=['GET', 'POST'])
@cross_origin()  # enables CORS POST, for GET: response.headers.add("Access-Control-Allow-Origin", "*")
def get_bookmarks():
    query_parameters = request.args
    video_ID = query_parameters.get('videoID')
    object_name = query_parameters.get('object_name')

    result = None
    if video_ID:
        if object_name:
            print(f'for {object_name}')
            result = DUMMY_DICT.get(object_name, {})
        else:
            print('all objects')
            result = DUMMY_DICT
    else:
        # use dummy return
        result = DUMMY_DICT
    return jsonify(result)  # {} means not found!


if __name__ == '__main__':
    app.run(host="127.0.0.1",port=5000)
