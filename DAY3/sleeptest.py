# sleep(시간(초단위)) 
# 특정 시간 이후에 실행시키고 싶을 때 사용
# 비동기적으로 작동하는 함수


# 30분 뒤에 알람이 오게 하고 싶다.
from time import sleep

def shinun():
    sleep(3) # 시간 : 초단위
    print("쉬는시간이에용")

print("쉬는시간 3초전")
shinun()
print("쉬는시간 다됨")

# 결과
"""
쉬는시간 3초전
쉬는시간이에용
쉬는시간 다됨
"""


# JavaScript 버전 => sleeptest.js
