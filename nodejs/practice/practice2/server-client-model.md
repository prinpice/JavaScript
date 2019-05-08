# Server-Client-Model

### server
* 특정 리소스를 서빙만 해줌
### client
* resource가 없는 상태에서 서버를 통해 ajax요청을 보내어 특정 resource를 가져옴
* vue가 하는 역할

* **CORS**(중요!!!)
Cross origin resource sharing
http 통신에서는 다른 origin에 가서 resource를 가져오는 것을 막아놨음(안전을 위해서)
=> api 서버에서 뚫어줘야 한다.
다른 domain에서 들어와도 resource를 보내주겠다.(django rest-framwork에서 허용해줘야함)

* middleware
    * http로 요청이 들어오면 중간에서 요청에 대한 작업을 거치고 보내줌
    * cors를 django rest-framework에서 가능하도록 middleware를 심기
    * 참고 주소 : https://github.com/ottoyiu/django-cors-headers/
    * terminal에서 설치
    ```git
    $ pip install django-cors-headers
    ```
    * settings.py에 추가하기
    ```python
    INSTALLED_APPS = [
        ...
        'corsheaders',
        ...
    ]

    MIDDLEWARE = [  # Or MIDDLEWARE_CLASSES on Django < 1.10
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
    ]

    CORS_ORIGIN_ALLOW_ALL = True
    ```