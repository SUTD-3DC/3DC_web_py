from flask import render_template, current_app
import requests


def index(path=''):
    """ renders the index html """
    if current_app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template('index.html')
