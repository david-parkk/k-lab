# k-lab_front team

# CHALLIFY

### 1. 프로젝트 설명

##### 1-1. 프로젝트 기획

 > 첼린지 정보제공 웹 서비스

##### 1-2. 프로젝트 목적
 - REST API에 대한 전반적인 이해
 - git을 이용한 버젼관리
 - 쿠키와 같은 프론트사이드 데이터에 대한 이해
 
### 2. Chalify 기능
  - 첼린지 정보제공
  - 나이에 따른 위험성 첼린지 필터(20세이상)
  - 계시판 및 댓글
  - 회원가입 로그인
  
### 3. 아키텍처
**기술 스택**
* Vue.js
* Vuex
* Vue CLI
* AWS S3



| frontend | frontend |designer|
| :---------------------------------------------: |:---------------------------------------------: |:---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/david-parkk" width=200px alt="박지원"/> |<img src="https://avatars.githubusercontent.com/leemsh" width=200px alt="임상혁"/> |<img src="https://avatars.githubusercontent.com/hxezu" width=200px alt="현혜주"/> |
|                            [박지원](https://github.com/david-parkk)                            |                            [임상혁](https://github.com/leemsh)                            |                            [현혜주](https://github.com/hxezu)                            |
## Rule
### $`\textcolor{red}{\text{main branch commit X -> other branch }}`$ 

### Commit message 구조
```
<type>: <subject>

<body>

<footer>
```

### Type
+ feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
+ fix : 기능에 대한 버그 수정
+ build : 빌드 관련 수정
+ chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
+ ci : CI 관련 설정 수정
+ docs : 문서(주석) 수정
+ style : 코드 스타일, 포맷팅에 대한 수정
+ refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
+ test : 테스트 코드 추가/수정
+ release : 버전 릴리즈

### Subject
Type 과 함께 헤더를 구성합니다. 예를들어, 로그인 API 를 추가했다면 다음과 같이 구성할 수 있습니다.
```
feat: Add login api
```

### Body
헤더로 표현이 가능하다면 생략이 가능합니다. 아닌 경우에는 자세한 내용을 함께 적어 본문을 구성합니다.

출처-https://velog.io/@jiheon/Git-Commit-message-%EA%B7%9C%EC%B9%99




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
