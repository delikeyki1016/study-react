
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
- SPA : Single Page Application (물리적인 html이 한개이기 때문에 1개의 메모리 공간안에서 JS간의 데이터 공유 가능)

- 상태관리 : application의 data => State(상태)

- Flux, Redux 라이브러리를 사용하면 상태관리를 앱단위로 중앙 집중화할 수 있음 

- 단방향one-way data binding (react) : JS에서 발생된 데이타를 화면에 바인딩 시킴 
    (양방향two-way data binding : JS, html 각각 발생된 데이타를 서로 바인딩 시킴, 고비용, 퍼포먼스 이슈, 초창기 angular)

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
: 상위 컴포넌트가 나에게 속성으로 전달하는 데이터 (properties)
* 참조 가능, 변경 불가능 => 읽기만 가능 
* 기본값(number, string, boolean)은 변경 불가능 
* 객체는 주소값을 참조하고 있는 reference 변수이다. 객체자체를(주소) 변경할 순 없지만 객체 내부 값은(주소가 실제 가르키고 있는 값) 변경이 가능하다.
    - 그러나 객체의 내부값도 변경하지 않는 것을 권장
* props 데이터들의 type 선언 : npm install prop-types

## state
: 내 컴포넌트에서 선언하고 관리되는 데이터 
-  변경이 되면 화면re-rendering (일반변수는 값이 변경된다 하더라도 re-rendering이 되지는 않는다)
-  const [getter, setter] = useState(초기값) => getter: 데이터 읽기, setter: 데이터 변경
-  상태가 없을수록 컴포넌트 재사용성이 좋아짐. 가능하다면 상태가 없는 컴포넌트를 만들자.


## 컴포넌트의 분리
- 컴포넌트 : 동적UI를 목적으로 하는 JS 화면단위
- 컴포넌트 세분화 : 개발생산성, 유지보수성, 재사용성, 성능최적화 등을 고려하여 나눈다.
- re-rendering은 컴포넌트 단위로 랜더링된다.(성능 최적화)
- 장점: 에러 가능성 줄고, 디버깅이 쉬워짐.

### style 기법 
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
    - 모듈로 import 한 것은 해당 컴포넌트 명으로 해당 파일내에서만 사용 가능(중복클래스명 충돌 가능성이 줄어듬)
    - css파일명을 four.module.css 로 저장 후 .wrapper 선언 
    ```
    import styles from './four.module.css'
    <div className={styles.wrapper}>
    ```

4. styled component
* 설치 : npm install styled-components @types/styled-components
- template literal :
```
`color: ${colorName}`
```

- tagged template literal : 함수호출 시 매개변수를 템플릿 리터럴로 사용 (arg1, arg2)
    - arg1에는 정적데이터, arg2에는 동적데이터가 자동으로 삽입
    - 동적 styled component를 만들 수 있는 함수가 있어야 해서 예를 들면 아래와 같이 선언 
```
div`color: ${colorName}`
```
=> div라는 함수에 매개변수를 템플릿리터럴로 선언 color:는 정적데이터로 arg1, colorName은 동적데이터로 arg2에 삽입된다.

### React 이벤트
- 우리가 작업하는 virtual DOM에 이벤트핸들러를 등록하면, 상위 root container에 연결하여(대행자) root container가 이벤트를 real DOM에 위임함.
객체에 이벤트를 거는 것이므로 onClick (React Event)
- 이벤트 핸들러 함수 내에서 동일 useState의 setter함수를 3번 호출한다고 해서 원하는 값이 나오지 않는다. 
setter함수는 비동기로 처리 되기 때문에 2,3번째 호출이 바로 실행된다. (권장하지않음)
```
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
```
- setter함수가 동기적으로 처리되어야 할 때는 함수를 이용해 리턴값으로 상태를 변경하도록 해야함
```
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
```

## 제어 컴포넌트, 비제어 컴포넌트
- Controlled Component : 사용자 입력 값이 state, props에 의해 제어되는 컴포넌트 (권장) 
    - 사용자 입력 => 이벤트캐치 => state 변경 => re-rendering (단방향 데이터 바인딩)
- Uncontrolled Component : 사용자 입력 값이 state, props에 의해 제어되지 않는 컴포넌트, 입력값을 알아내려면 실제DOM을 접근해야 함.(고비용,단점)
    - 사용자입력값을 알아내려면 ref 사용. (권장하지 않음)

## 상태보유 여부에 따른 컴포넌트 분류
- Stateless Component : 상태 미보유
- Stateful Component : 상태 보유

## 역할에 따른 컴포넌트 분류
- Container Component : 업무로직 관련한 컴포넌트 (하위 컴포넌트들이 공통으로 사용하는 상태들을 선언)
- Presentational Component : 화면 관련한 컴포넌트
=> 하나의 관련내용에서 컨테이너와 프리젠테이션으로 분리 => 관리효율, 유지보수성 높아짐

### 설계
## 화면 단위의 설계 순서
- 화면 시안을 이용해 상태와 액션(상태변경) 도출 
- 컴포넌트 분할, 컴포넌트 목록 도출
- 상태를 관리하는 Container 컴포넌트 도출
- 각 컴포넌트가 필요로 하는 상태와 액션 도출
- 컴포넌트 단위로 상태,속성,메서드를 문서화 
- 컨테이너 컴포넌트 작성
- 프리젠테이션 컴포넌트 작성 



* - immer(불변성 체크 모듈) 상태값이 변경된 부분을 쉽게 체크해주는 모듈 
```
npm install immer
import {produce} from 'immer'
```

### component 작성 방식
# 함수 컴포넌트
- 최근 더 많이 사용됨 (더 간결하기 때문에)
- 컴포넌트의 생명주기 이벤트 처리를 React Hook을 이용하여 어느 정도는 처리가 됨
- 프리젠테이셔널 컴포넌트를 쉽게 만들기 위해 생겨남 

# 클래스 컴포넌트 
- 다양한 생명주기 이벤트 메서드를 사용할 수 있음 
- 작성은 더 복잡하지만 자바,C3 개발자라면 익숙함 
- state, setState, this.props 는 예약어

# Lifecycle (생명주기)
1. Mounting : 컴포넌트의 인스턴스가 만들어지고 DOM 트리에 추가
    - 1.1 : constructor(props) 생성자 (props가 매개변수, 첫번째 호출 함수)
        - 부모로부터 속성을 상속받아 자신의 상태를 재정의하여 초기화(최초 한번)
        - 첫 줄에 반드시 super(props)가 포함되어야 함 => 상위 생성자 호출
    - 1.2 : render() 
        - return된 객체들이 virtual dom에 랜더링
        - 이 메서드 내부에서 setState()를 해서는 안됨 => 무한루프
    - 1.3 : componentDidMount()
        - DOM 트리에 마운트 완료된 후에 호출(최초 한번, 아직 real dom엔 반영되지 않음)

2. Updating
    - static getDerivedStateFromProps : props가 변경되어 컴포넌트에 전달되면 이 값을 이용해서 state가 동기화될 때 사용함 
    - shouldComponentUpdate : render() 실행되기 전에 리랜더링이 필요한 지 여부를 판단(리턴값으로 bool 선언)
    - getSnapshotBeforeUpdate() : render() 호출된 직후 virtual dom 업데이트가 되고 나면 호출(real dom 전)
    - componentDidUpdate() : DOM 업데이트가 일어난 직후 실행.

3. UnMounting
    - componentWillUnmount : 컴포넌트 언마운트될 때 실행(ex. 화면전환)


# 가상DOM과 조정작업
- DOM조작은 빠르지만 브라우저에서 reflow, repaint 과정이 느림
- reflow : layout을 잡는다. 랜더링할 돔트리를 새로 만들고, html 엘리먼트 각각의 위치를 계산하고 배치함
- repaint : html 엘리먼트에 스타일을 입히고 그려냄 
=> React는 virtual dom을 조작함으로(reflow,repaint가 일어나지않음) real dom과 비교하여 변경된 부분만을 reflow,repaint 함 ==> 조정작업(Reconciliation)
- 반복요소에 key를 추가해야하는 것은 내부적으로 반복요소의 변경사항을 추적하기 힘들기 때문에 가급적 고유한 값으로 붙이는 것을 권장함
: key가 없으면 전체를 리랜더링 해야해서 느림
- shouldComponentUpdate
    - shallow compare : 얕은 비교 (객체의 변경사항(주소) 비교) immer모듈
    - deep compare : 깊은 비교 (값 자체 비교) => 시간 소요 많음 


