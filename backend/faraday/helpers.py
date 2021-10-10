from datetime import datetime
import time


def get_last_market_time(epoch):
    cur_time = time.strftime('%H:%M', time.localtime(epoch))

    market_start = "09:01"
    market_end = "15:29"

    secs_in_day = 60 * 60 * 24

    if cur_time > market_end:
        date = time.strftime('%Y-%m-%d', time.localtime(epoch))
    else:
        date = time.strftime('%Y-%m-%d', time.localtime(epoch - secs_in_day))

    last_market_time = datetime.strptime(
        f"{date} {market_end}", "%Y-%m-%d %H:%M")
    return int(last_market_time.timestamp())


def local_is_stock_open():
    now = datetime.now()

    market_start = "09:01"
    market_end = "15:29"

    cur_time = now.strftime('%H:%M')

    if cur_time >= market_start and cur_time <= market_end:
        return True
    return False
