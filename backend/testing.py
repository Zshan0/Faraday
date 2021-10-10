from datetime import datetime
import requests
import json
from pprint import pprint

from dotenv import load_dotenv
import os

load_dotenv()
headers = {
    "cookie": os.environ.get("cookie"),
    "user-agent": os.environ.get("user-agent")
}


def get_stock(symbol, start, end, interval):
    symbol = symbol + ".NS"
    base_url = "https://query1.finance.yahoo.com/v8/finance/chart/"
    url = base_url + symbol
    parameters = {}
    parameters["period1"] = start
    parameters["period2"] = end
    parameters["interval"] = interval
    res = requests.get(url, headers=headers, params=parameters)
    res = res.json()
    pprint(res)
    # start = res["chart"]["result"][0]["meta"]["tradingPeriods"][0][0]["start"]
    # end = res["chart"]["result"][0]["meta"]["tradingPeriods"][0][0]["end"]
    timestamps = res["chart"]["result"][0]["timestamp"]
    high = res["chart"]["result"][0]["indicators"]["quote"][0]["high"]
    low = res["chart"]["result"][0]["indicators"]["quote"][0]["low"]
    open = res["chart"]["result"][0]["indicators"]["quote"][0]["open"]
    close = res["chart"]["result"][0]["indicators"]["quote"][0]["close"]
    volume = res["chart"]["result"][0]["indicators"]["quote"][0]["volume"]
    # print(high, low, open, close, volume)


get_stock("INFY", 1633581867, 1633866405, "1d")
