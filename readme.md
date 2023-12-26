
* 소프트웨어 아키텍쳐 모델 : 관심의 분리 

## MVC (Model, View, Controller) : 역할 별로 분리하여 개발 
* 주 목적 : 화면이 주목적인 소프트웨어 개발에 적용
* Model : 비지니스 업무 로직과 데이타
* View : 프리젠테이션 로직(화면)
* Controller : 제어 
    * express, spring ==> MVC 적용 
    * express(node기반의 백엔드앱의 Controll을 위한 프레임워크)

* 동적 UI 컴포넌트를 만들기 위한 프레임웍 : angular,vue,react
* react : View를 중심으로 한 프론트앱의 프레임워크, 동적 데이터을 반영하는 대규모 웹앱 구축을 위해 만들어짐 

# React 소개
- html이 화면당 여러개 일때, 각각이 html이 각각의 메모리 공간을 차지함. JS간의 데이터 공유가 불가능 
- SPA : Single Page Application (물리적인 html이 한개이기 때문에 1개의 메모리 공간안에서 JS간의 상태 유지가 가능)

- 상태관리 : application의 data => State(상태)

- Flux, Redux 라이브러리를 사용하면 상태관리를 앱단위로 중앙 집중화할 수 있음 

- 단방향one-way data binding (react) : 화면자체도 JS로 만들기 때문에 JS에서 발생된 데이타를 화면에 바인딩 시킴 
    (양방향two-way data binding : JS,html 각각 발생된 데이타를 서로 바인딩 시킴)

- JSX(Javascript XML) : javascript내에 xml을 표현할 수 있음, 자바스크립트 내에서 html태그를 xml,js 문법에 의해 쓸 수 있음 

- transplie : JSX문법을 JS문법으로 변환 ==> Babel 라이브러리 이용  
    (*compile: 개발자코드를 기계어로 변환) 

- 컴포넌트 기반 개발  => 재사용성 향상

- 가상 DOM (Virtual DOM) : 실제 DOM Node를 핸들링(전체 랜더링, 느림)하지 않고, 메모리에 실제 돔과 똑같은 가상돔을 만들어서 핸들링한다. 
    * => 단점: 메모리 소모
    * => 장점: 랜더링 최적화(화면 출력 속도가 빠르다), 실제돔과 가상돔을 비교하여 바뀐 부분만 실제돔에 부분 랜더링함
    * html parser : 태그를 만나면  메모리에 태그 하나 당 JS 객체를 하나 생성 후(DOM NODE) 브라우저에 drawing 

*CDN: Contents Delivery Network

## 개발 환경 설정 도구 (CLI)
### CRA (Create-react-app) 방법 
- 모듈번들러는 webpack을 이용
- npx create-react-app 프로젝트명

- 모듈 설치는 보통 npm 
- 명령어(create-react-app) 입력시는 npx
- -g 로 설치했다라고 하면,
    - npm uninstall -g create-react-app
    - npx clear-npx-cache

- 설치 중 에러, 캐싱이 문제라면
    - npm cache clean --force (강제로 캐시 지우기)
    - npm cache verify (캐시 지운 후 검사)
    
### vite 방법: vue전용 빌드 도구로 탄생, 리액트 지원, CRA의 단점을 극복, 개발과 빌드의 속도에 촛점, 프로젝트 사이즈 경량화
- webpack, vite, rollup : 모듈 번들러 (여러 모듈들을 최종 결과 하나로 묶음)
- webpack : 일부 수정이 되더라도, 모든 파일을 다시 묶어서 브라우저에 전달(개발 속도 저하) 
        * ==> vite가 이 문제를 해결 (수정된 부분만을 브라우저에 넘겨서 번들링함)
*boilerplate : 프로젝트 구조 샘플

- npm init vite 프로젝트명 -- --template react

## JSX
* Javascript의 확장문법 : JS + xml (의미없는 단일루트표현은 <> ~~~ </>) 
- xml은 단일 루트, 닫기 태그 필수.
* 카멜 표기법, 대소문자 구분
* Attribute 이름이 DOM API 스펙에 기반을 두고 있음, div 태그는 리액트의 컴포넌트이다. 
    - div class="test" => JS의 API인 div className="test"
* {} 보간법(interpolation) 사용 : {} 내부에 결과값이 있는 것을 사용함(즉 표현식(expression) 만 가능, 구문(statement)는 불가능)

### 컴포넌트의 데이터 : props, state 

## props
: 상위 컴포넌트가 나에게 전달하는 데이터 (properties)
* 참조 가능, 변경 불가능 => 읽기만 가능 
* 기본값(number, string, boolean)은 변경 불가능 
* 객체는 주소값을 참조하고 있는 reference 변수이다. 객체자체를(주소) 변경할 순 없지만 객체 내부 값은(주소가 실제 가르키고 있는 값) 변경이 가능하다.
    - 그러나 객체의 내부값도 변경하지 않는 것을 권장
* type 검증 : npm install prop-types

## state
: 내 컴포넌트에서 선언하고 관리되는 데이터 
-  변경이 되면 화면re-rendering
-  const [getter, setter] = useState(초기값) => getter: 데이터 읽기, setter: 데이터 변경
-  상태가 없을수록 컴포넌트 재사용성이 좋아짐. 가능하다면 상태가 없는 컴포넌트를 만들자.


## 컴포넌트의 분리 
- 컴포넌트 세분화 : 개발생산성, 유지보수성, 재사용성, 성능최적화 등을 고려하여 나눈다.
- re-rendering은 컴포넌트 단위로 랜더링된다.(성능 최적화)
- 장점: 에러 가능성 줄고, 디버깅이 쉬워짐.

### CSS 
1. global.css
    - import 'bootstrap/dist/css/bootstrap.css' => 모든 jsx에서 사용 가능 

2. inline css
    - css를 json object 형식으로 js파일로 선언하고 import해서 사용 
    style.js로 아래 선언 
    ```
    const styles = {
        textStyle: {
            textDecoration: "underline", 
        },
    }
    ```
    ```
    import styles from './style'
    <p style={styles.textStyle}>hello world</p>
    ```

3. module.css
    - 모듈로 import 한 것은 해당 컴포넌트 명으로 해당 파일내에서만 사용 가능
    - css파일명을 four.module.css 로 저장 후 .wrapper 선언 
    ```
    import styles from './four.module.css'
    <div className={styles.wrapper}>
    ```

4. styled component
* 설치 : npm install styled-components @types/styled-components
- template literal :
```
`hello ${name}`
```

- tagged template literal : 함수호출 시 매개변수를 템플릿 리터럴로 사용 (arg1, arg2)
    - arg1에는 정적데이터, arg2에는 동적데이터가 자동으로 삽입
    - 동적 styled component를 만들 수 있는 함수가 있어야 해서 예를 들면 아래와 같이 선언 
```
div`hello ${name}`
```
=> div라는 함수에 매개변수를 템플릿리터럴로 선언 hello는 정적데이터로 arg1, name은 동적데이터로 arg2에 삽입된다.

### React 이벤트
- 우리가 작업하는 virtual DOM에 이벤트핸들러를 등록하면, 상위 root container에 연결하여(대행자) root container가 이벤트를 real DOM에 위임함.
객체에 이벤트를 거는 것이므로 onClick (React Event)












