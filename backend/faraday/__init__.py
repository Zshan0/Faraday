from flask import Flask
from faraday.config import Config
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

db = None


def create_app(config_class=Config):
    global db

    # Create flask app object
    app = Flask(__name__)
    CORS(app)
    # app.config["CORS_HEADERS"] = 'Content-Type'
    app.config["MONGO_URI"] = Config.CONNECTION_STRING

    # Tie with database
    mongodb_client = PyMongo(app)
    db = mongodb_client.db

    from faraday.routes.main import main
    from faraday.routes.user import user
    from faraday.routes.contest import contest
    from faraday.routes.stocks import stocks

    app.register_blueprint(main)
    app.register_blueprint(user)
    app.register_blueprint(contest)
    app.register_blueprint(stocks)

    return app
