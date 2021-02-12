from flask import Flask, render_template
app = Flask(__name__)


@app.route("/play")
def showboxes():
    return render_template("index1.html")


@app.route("/play/<num>")
def showboxes1(num):
    return render_template("index.html", num=int(num))


@app.route("/play/<num>/<color>")
def showboxes2(num, color):
    return render_template("index3.html", num=int(num), color=color)


if __name__ == "__main__":
    app.run(debug=True)
