
## 소프트웨어 아키텍쳐 모델 : 관심의 분리 

## MVC (Model, View, Controller) : 역할 별로 분리하여 개발 
* 주 목적 : 화면이 주목적인 소프트웨어 개발에 적용
* Model : 비지니스 업무 로직과 데이타
* View : 프리젠테이션 로직(화면)
* Controller : 제어 
    * express, spring ==> MVC 적용 
    * express(node기반의 백엔드앱의 Controll을 위한 프레임워크)

## react : View를 중심으로 한 프론트앱의 프레임워크, 동적 데이터을 반영하는 대규모 웹앱 구축을 위해 만들어짐 

# React 소개
- SPA : Single Page Application

- 상태관리 : application의 data => State(상태)

- Flux, Redux 라이브러리를 사용하면 상태관리를 앱단위로 중앙 집중화할 수 있음 

- 단방향one-way data binding (react) : 화면자체도 JS로 만들기 때문에 JS에서 발생된 데이타를 화면에 바인딩 시킴 
(양방향two-way data binding : JS,html 각각 발생된 데이타를 서로 바인딩 시킴)

- JSX(Javascript XML) : javascript내에 xml을 표현할 수 있음, 자바스크립트 내에서 html태그를 쓸 수 있음 

- transplie : JSX문법을 JS문법으로 변환 ==> Babel 라이브러리 이용  
(*compile: 개발자코드를 기계어로 변환) 

- 컴포넌트 기반 개발  => 재사용성 향상

- 가상 DOM (Virtual DOM) : 실제 DOM Node를 핸들링(전체 랜더링, 느림)하지 않고, 메모리에 실제 돔과 똑같은 가상돔을 만들어서 핸들링한다. 
    * => 단점: 메모리 소모
    * => 장점: 랜더링 최적화(화면 출력 속도가 빠르다), 실제돔과 가상돔을 비교하여 바뀐 부분만 실제돔에 부분 랜더링함
    * html parser : 태그를 만나면  메모리에 태그 하나 당 JS 객체를 하나 생성 후(DOM NODE) 브라우저에 drawing 

*CDN: Contents Delivery Network

## 개발 환경 설정 도구 
### CRA (Create-react-app) 방법 
- npx create-react-app 프로젝트명
### vite 방법: vue전용 빌드 도구로 탄생, 리액트 지원 
*webpack : 모듈 번들러 
*boilerplate : 프로젝트 구조 샘플












