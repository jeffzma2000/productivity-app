from __future__ import print_function
from flask import Flask, render_template, request
import time
from datetime import datetime, date
import pickle
import os.path
from flask_sqlalchemy import SQLAlchemy
from config import Config
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import Task

@app.route('/time')
def get_current_time():
    return {'time': time.asctime( time.localtime(time.time()) )}

@app.route('/get-tasks/<name>/<int:index>')
def get_tasks(name, index):
    try:
        tasks = Task.query.filter_by(date=date.today()).filter_by(type=name).filter_by(number=index).all()[-1]
        desc = tasks.desc
        done = tasks.done
    except:
        desc = ''
        done = False
    return {'tasks': desc, 'done': done}

@app.route('/submit/<name>/<int:index>/<desc>')
def submit_task(name, index, desc):
    try:
        t = Task.query.filter_by(date=date.today()).filter_by(type=name).filter_by(number=index).all()[-1]
        t.desc = desc
    except:
        t = Task(desc=desc, date=date.today(), type=name, number=index, done=False)
        db.session.add(t)
    db.session.commit()
    return {'tasks': desc, done: False}

@app.route('/check/<name>/<int:index>/<done>')
def check_task(name, index, done):
    t = Task.query.filter_by(date=date.today()).filter_by(type=name).filter_by(number=index).all()[-1]
    if done == "true":
        t.done = True
    else:
        t.done = False
    db.session.commit()
    return {'status': 0}
