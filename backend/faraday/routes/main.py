from flask import Blueprint, request
import time
from flask_pymongo import PyMongo
import flask
from faraday.config import Parameters as PARAMS
from faraday import db

main = Blueprint("main", __name__)

# Welcome check


@main.route('/')
def index():
    return f"Welcome to Faraday's Backend. {PARAMS.TEST_VALUE}"
