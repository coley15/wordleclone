from flask import Flask, render_template

# going to have to use this part in development to run the server with the /public thing
app = Flask(__name__)

@app.route('/')
@app.route('/main')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)

