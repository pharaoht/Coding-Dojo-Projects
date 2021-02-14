from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/about", methods=['POST'])
def showinfo():
    name_from_form = request.form['name']
    location_from_form = request.form['location']
    lang_from_form = request.form['language']
    text_from_form = request.form['text']
    return render_template("show.html", template_name=name_from_form, template_location=location_from_form, template_lang=lang_from_form, template_text=text_from_form)


if __name__ == "__main__":
    app.run(debug=True)
