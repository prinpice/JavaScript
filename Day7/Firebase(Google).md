# Firebase(Google)

* 인프라를 관리할 필요 없이 빠르게 앱 개발
  * Infra : 서비스를 유지할 기반 기술(DB, 서버 등등)
* [https://firebase.google.com](https://firebase.google.com/)
* 10kb이상 => 과금
* 특정 데이터를 추가만 할 때 가장 많이 사용(append/read)
* 다른 종류 : NoSQL, firestore


* 오늘날의 소프트웨어
  * 개발주기
    
    * 회사마다 다름 (3일/ 2주 등등)
  * A/B testing
    * 직접 설문조사하지 않음
    * 동시에 2개의 버전 사용
    * 모든 행위에 data point가 잡혀있음
      * 버튼을 클릭할 때까지의 시간, 스크롤을 얼마나 하고 클릭하는지 등등
  * 3가지 마케팅 단계
    
    1. 유입 - 얼마나 많은 사람들이 들어올 수 있는지(들어오게 하는지)
    2. 전환 - 얼마나 구매하는지
    3. 재구매/재방문(**오늘날의 point**)
    * ex) 29cm
    * **유입 대비 전환율**
      * 얼마나 자연스럽게 구매버튼을 누르게 하는지
    * 앱에 들어와서 구매까지의 모든 포인트 data를 가지고 개발함





1. 시작하기
2. 프로젝트 추가
   - 프로젝트 이름
   - 애널리틱스 위치 : 대한민국
   - Cloud Firestore 위치 : asia-northeast1(한국이 포함된 곳)

3. Real Database - database 생성

   * key-value pair database

   * 좀 더 발전한 것 : NoSQL

   * 규칙에서 read, write 전부 true로 바꿔줌

     ```
     {
       "rules": {
         ".read": true,
         ".write": true
       }
     }
     ```

   * 백업서비스 - 과금포인트