from flask import Blueprint, request
import time
from flask_pymongo import PyMongo
import flask
from faraday.config import Parameters as PARAMS
from faraday import db
from faraday.api import get_price
from datetime import datetime

contest = Blueprint("contest", __name__)


def calc_profit(cash, holdings):
    worth = 0
    for holding in holdings:
        price = get_price(holding, "1m")["close"]
        worth += price * holdings[holding]

    profit = (cash + worth) - PARAMS.DEFAULT_CASH
    return profit, worth


@contest.route('/contest/add', methods=["POST"])
def add_contest():
    contests = db.contests.find()
    contest_id = len(list(contests)) + 1
    for contest in contests:
        if contest["name"] == request.json["name"]:
            return flask.jsonify(success=False, message=f"Contest with name {contest['name']} already exists")

    db.contests.insert_one({
        'name': request.json["name"],
        'start': request.json["start"],
        'end': request.json["start"],
        'rankings': [],
        'contest_id': contest_id
    })

    return flask.jsonify(success=True, message="Contest Added")


@contest.route('/contest/fetch_all', methods=["GET"])
def fetch_contests():
    contests = db.contests.find()
    ret_contests = []
    for contest in contests:
        ret_contests.append({
            "contest_id": contest["contest_id"],
            "name": contest["name"],
            "start": contest["start"],
            "end": contest["end"],
            "participants": len(contest["rankings"])
        })
    return flask.jsonify(success=True, message=ret_contests)


@contest.route('/contest/fetch/<contest_id>', methods=["GET"])
def fetch_one_contest(contest_id):
    contest_id = int(contest_id)
    contest = db.contests.find_one({'contest_id': contest_id})
    ranks = []
    for username in contest["rankings"]:
        user = db.users.find_one({"username": username})
        user_contest = [cont for cont in user["contests"]
                        if cont["contest_id"] == contest_id]

        if not len(user_contest):
            continue

        user_contest = user_contest[0]

        profit, worth = calc_profit(
            user_contest["cash"], user_contest["holdings"])
        ranks.append({
            "username": username,
            "profit": profit,
            "portfolio": worth,
            "net_asset": profit + PARAMS.DEFAULT_CASH,
            "cash": user_contest["cash"],
            "return": (profit / PARAMS.DEFAULT_CASH) * 100
        })

        ranks.sort(key=lambda x: x["profit"])

    ret_contest = {
        "contest_id": contest["contest_id"],
        "name": contest["name"],
        "start": contest["start"],
        "end": contest["end"],
        "participants": len(contest["rankings"]),
        "rankings": ranks
    }
    return flask.jsonify(success=True, message=ret_contest)
