import requests
# gitbash에서 설치하기

url = "https://jsonplaceholder.typicode.com/"
response = requests.get(url + "posts")
print(response) # <Response [200]>
print(response.headers) # header 정보 출력
print(response.text) # body 정보 출력
print(response.json()) # list로 들어간 dictionary 묶음
result = response.json()
print(result[0].get('title')) # 0번째 요소의 title출력


# post로 보낼때는 headers와 data를 같이 보내줘야 한다.
headers = {}
data = {}
response = requests.post(url + "posts") # 이렇게만 보내면 보내지지 않는다.