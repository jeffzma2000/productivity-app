from __future__ import print_function
from flask import Flask, render_template
import time
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.asctime( time.localtime(time.time()) )}
