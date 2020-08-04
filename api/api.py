from flask import Flask, render_template
import time

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/login')
def login():
    success = 1
    return {'success': success}