from flask import Blueprint, request
import time
from flask_pymongo import PyMongo
import flask
from datetime import datetime
from pymongo import message
from faraday.api import get_stock, get_price
from faraday.config import Parameters as PARAMS
from faraday import db
from faraday import helpers

stocks = Blueprint("stocks", __name__)


@stocks.route('/stocks/fetch', methods=["POST"])
def fetch_stock():
    symbol = request.json["symbol"]
    start = request.json["start"]
    end = request.json["end"]
    interval = request.json["interval"]
    data = get_stock(symbol, start, end, interval)
    return flask.jsonify(success=True, message=data)


@stocks.route('/stocks/price', methods=["POST"])
def fetch_price():
    symbol = request.json["symbol"]
    end = request.json["time"]
    price = get_price(symbol, end)

    return flask.jsonify(success=True, message=price)


@stocks.route('/stocks/buy', methods=['POST'])
def buy_stock():
    username = request.json["username"]
    symbol = request.json["symbol"]
    contest_id = int(request.json["contest_id"])
    qty = int(request.json["qty"])
    buy = 1 if request.json["buy"] else -1

    if not helpers.is_stock_open():
        return flask.jsonify(success=False, message="Market is closed so kindly fuck off")

    contests = db.users.find_one({"username": username})['contests']
    for contest in contests:
        if contest['contest_id'] == contest_id:
            price = get_price(symbol, int(datetime.now().timestamp()))

            if buy == 1:
                if price * qty > contest['cash']:
                    return flask.jsonify(sucess=False, message='Aukad ke baahar')
            else:
                if symbol not in contest['holdings'].keys() or qty > contest['holdings'][symbol]:
                    return flask.jsonify(sucess=False, message='Nothing to sell')

            contest['cash'] -= price * qty * buy
            if symbol in contest['holdings'].keys():
                contest['holdings'][symbol] += qty * buy
            else:
                contest['holdings'][symbol] = qty

    db.users.find_one_and_update(
        {'username': username},
        {"$set": {
            "contests": contests
        }})

    return flask.jsonify(success=True)
    