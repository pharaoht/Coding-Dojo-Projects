from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def greeting():
    return 'Hello World'


@app.route("/dojo")
def dojo():
    return "Dojo"


@app.route("/say/<name>")
def sayword(name):
    return "Hi, " + name


@app.route("/repeat/<num>/<word>")
def repeatit(num, word):
    return word * int(num)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
