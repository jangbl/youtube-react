# pip install pytube3 --upgrade

from flask import Flask, jsonify, request

app = Flask(__name__)

DUMMY_DICT = {
    'car': [[5, 10], [30, 35]],
    'bicycle': [[15, 35]]
}


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/bookmarks/', methods=['GET'])
def get_bookmarks():

    query_parameters = request.args
    video_link = query_parameters.get('video_link')
    object_name = query_parameters.get('object_name')

    result = None
    if video_link:
        if object_name:
            result = DUMMY_DICT.get(object_name, {})
        else:
            result = DUMMY_DICT
    else:
        # use dummy return
        result = DUMMY_DICT
    return jsonify(result)  # {} means not found!


if __name__ == '__main__':
    app.run(host="127.0.0.1",port=5000)
