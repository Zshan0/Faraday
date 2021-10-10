from flask import Blueprint, request
import time
from flask_pymongo import PyMongo
from pymongo import message
from pymongo.collection import ReturnDocument
import flask
from faraday.config import Parameters as PARAMS
from faraday import db
from flask_cors import CORS, cross_origin

user = Blueprint("user", __name__)

# Login


@user.route('/user/login', methods=["POST"])
# @cross_origin
def login():
    users = db.users.find()
    for user in users:
        if user["username"] == request.json["username"]:
            if user["password"] == request.json["password"]:
                return flask.jsonify(success=True, message="Success")
            return flask.jsonify(success=False, password="Wrong Password")
    return flask.jsonify(success=False, username="No such username found")

# Signup with unique username


@user.route('/user/signup', methods=["POST"])
def signup():
    users = db.users.find()
    for user in users:
        if user["username"] == request.json["username"]:
            return flask.jsonify(success=False, message="Username already exists")

    db.users.insert_one({
        'username': request.json["username"],
        'password': request.json["password"],
        'contests': []
    })
    return flask.jsonify(success=True, message="Account Created")

# Enter a contest


@user.route('/user/enter_contest/<username>/<contest_id>', methods=["POST"])
def enter_contest(username, contest_id):
    contest_id = int(contest_id)
    contests = db.users.find_one({'username': username})['contests']
    if contests == None:
        return flask.jsonify(sucess=False, message="No user found")
    
    check_user = [cont for cont in contests if cont['contest_id'] == contest_id]

    if len(check_user):
        return flask.jsonify(sucess=False, message="User already added to contest")
    
    contests.append({
        'contest_id': contest_id,
        'cash': PARAMS.DEFAULT_CASH,
        'holdings': {}
    })
    db.users.find_one_and_update(
        {'username': username},
        {"$set": {
            'contests': contests
        }})

    rankings = db.contests.find_one({'contest_id': contest_id})['rankings']
    if rankings == None:
        return flask.jsonify(sucess=False, message="No contest Found")
    rankings.append(username)
    db.contests.find_one_and_update(
        {'contest_id': contest_id},
        {"$set": {
            'rankings': rankings
        }}
    )
    return flask.jsonify(sucess=True, message="User added to contest")
