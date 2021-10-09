from flask import Blueprint
import time
from faraday.config import Parameters as PARAMS

main = Blueprint("main", __name__)


@main.route('/')
def index():
    return f"Welcome to Faraday's Backend."
