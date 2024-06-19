from flask import Flask, render_template
import os
app = Flask(__name__, static_folder='static', template_folder='templates')
@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    if not os.path.exists('public'):
        os.makedirs('public')
    with app.app_context():
        with open('public/index.html', 'w') as f:
            f.write(index())