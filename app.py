from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/roadmap')
def roadmap():
    return render_template('roadmap.html')

@app.route('/mining')
def mining():
    return render_template('mining.html')

@app.route('/download')
def download():
    return render_template('download.html')
@app.route('/join')
def join():
    return render_template('join.html')

if __name__ == '__main__':
    app.run(debug=True)
