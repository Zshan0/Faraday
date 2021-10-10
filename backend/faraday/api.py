from datetime import datetime
import requests
import json
from flask import request
from dotenv import load_dotenv
import os
from faraday import helpers

load_dotenv()
headers = {
    "cookie": os.environ.get("cookie"),
    "user-agent": os.environ.get("user-agent")
}


def convert_to_datetime(timestamp): return datetime.fromtimestamp(timestamp)


def get_stock(symbol, start, end, interval):
    try:
        symbol = symbol + ".NS"
        base_url = "https://query1.finance.yahoo.com/v8/finance/chart/"
        url = base_url + symbol
        parameters = {}
        parameters["period1"] = start
        parameters["period2"] = end
        parameters["interval"] = interval
        res = requests.get(url, headers=headers, params=parameters)
        res = res.json()
        # start = res["chart"]["result"][0]["meta"]["tradingPeriods"][0][0]["start"]
        # end = res["chart"]["result"][0]["meta"]["tradingPeriods"][0][0]["end"]
        timestamps = res["chart"]["result"][0]["timestamp"]
        high = res["chart"]["result"][0]["indicators"]["quote"][0]["high"]
        low = res["chart"]["result"][0]["indicators"]["quote"][0]["low"]
        open = res["chart"]["result"][0]["indicators"]["quote"][0]["open"]
        close = res["chart"]["result"][0]["indicators"]["quote"][0]["close"]
        volume = res["chart"]["result"][0]["indicators"]["quote"][0]["volume"]
        return {
            "success": True, "timestamps": timestamps,
            "high": high, "close": close, "open": open, "low": low,
            "volume": volume
        }
    except:
        return False


def get_prices(symbol, interval):
    try:
        symbol = symbol + ".NS"
        base_url = "https://query1.finance.yahoo.com/v8/finance/chart/"
        url = base_url + symbol
        parameters = {}
        parameters["interval"] = interval
        res = requests.get(url, headers=headers, params=parameters)
        res = res.json()
        timestamps = res["chart"]["result"][0]["timestamp"]
        high = res["chart"]["result"][0]["indicators"]["quote"][0]["high"]
        low = res["chart"]["result"][0]["indicators"]["quote"][0]["low"]
        open = res["chart"]["result"][0]["indicators"]["quote"][0]["open"]
        close = res["chart"]["result"][0]["indicators"]["quote"][0]["close"]
        volume = res["chart"]["result"][0]["indicators"]["quote"][0]["volume"]
        ts = [(convert_to_datetime(timestamp)).isoformat()
              for timestamp in timestamps]
        return {
            "success": True, "timestamps": timestamps,
            "high": high, "close": close, "open": open, "low": low,
            "volume": volume
        }
    except:
        return False


def get_price(symbol, interval):
    try:
        symbol = symbol + ".NS"
        base_url = "https://query1.finance.yahoo.com/v8/finance/chart/"
        url = base_url + symbol
        parameters = {}
        parameters["interval"] = interval
        res = requests.get(url, headers=headers, params=parameters)
        res = res.json()
        timestamps = res["chart"]["result"][0]["timestamp"]
        high = res["chart"]["result"][0]["indicators"]["quote"][0]["high"]
        low = res["chart"]["result"][0]["indicators"]["quote"][0]["low"]
        open = res["chart"]["result"][0]["indicators"]["quote"][0]["open"]
        close = res["chart"]["result"][0]["indicators"]["quote"][0]["close"]
        volume = res["chart"]["result"][0]["indicators"]["quote"][0]["volume"]
        ts = [(convert_to_datetime(timestamp)).isoformat()
              for timestamp in timestamps]
        return {
            "success": True, "timestamps": timestamps[-1],
            "high": high[-1], "close": close[-1], "open": open[-1], "low": low[-1],
            "volume": volume[-1]
        }
    except:
        return False
