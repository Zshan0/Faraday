from datetime import datetime
import time

def get_last_market_time(epoch):
    cur_time = time.strftime('%H:%M', time.localtime(epoch))

    market_start = "09:01"
    market_end = "03:29"

    if cur_time > market_end:
        

def local_is_stock_open():
    now = datetime.now()

    market_start = "09:01"
    market_end = "03:29"

    cur_time = now.strftime('%H:%M')

    if cur_time >= market_start and cur_time <= market_end:
        return True
    return False


def is_stock_open():
    pass


def last_marker_open_time():
    if is_stock_open():
        return datetime.now().timestamp()

    else:
        pass
