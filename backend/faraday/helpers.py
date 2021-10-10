from datetime import datetime

def is_stock_open():
  now = datetime.now()

  market_start = "09:01"
  market_end = "03:29"

  cur_time = now.strftime('%H:%M')

  if cur_time >= market_start and cur_time <= market_end:
    return True
  return False

