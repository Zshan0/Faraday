from flask import Blueprint, request
import time
from flask_pymongo import PyMongo
import flask
from faraday.config import Parameters as PARAMS
from faraday import db

contest = Blueprint("contest", __name__)


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
