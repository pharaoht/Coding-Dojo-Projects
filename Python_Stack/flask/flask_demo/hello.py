from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/hello/<name>/<num>')
def hello(num, name):
    return render_template("index.html", num=int(num), name=name)


@app.route('/user/<username>/<id>')
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id" + id


@app.errorhandler(404)
def page_not_found(e):
    return


if __name__ == "__main__":
    app.run(debug=True)
