import axios from 'axios'

const requestAPI = () => {
    // 이 파일의 origin : http://localhost:5173/
    // 다른 origin으로 ajax 요청

    // cross origin 문제 해결
    // 1. 서버에서 header에 다른 origin 데이터이지만, 허락하라고 명시하면 가능 
    //    node - express 기반의 앱에서는 cors 라는 모듈이 제공되고, 이 모듈로 쉽게 header 설정이 가능 app.use(cors());
    //const url = "http://localhost:8000/todolist/gdhong"

    // 2. 서버설정이 불가능한 상황에서는 proxy server를 구성하여 해결
    //    html과 동일 origin에 가상의 서버를 만들어, 우리는 그 서버에 요청. 가상의 서버에서 cross origin에 요청하는 것
    //    CORS 문제는 브라우저의 에러이기 때문에, 서버가 다른 origin에 요청하는 것은 문제가 안된다.
    //    vite.config.js 설정으로 proxy 구성 가능
    const url = "/api/todolist/gdhong" // url에 /api가 있다. proxy 서버가 처리한다. 프록시서버가 /api 를 제거시킨 후 8000포트로 요청을 대행
    // 결국 8000에 들어가는 url은 http://localhost:8000/todolist/gdhong
    axios.get(url).then((response) => {
        console.log("## 응답:", response)
    })
}

requestAPI()

const App01 = () =>{
    return (
        <h2>console로 CORS 확인</h2>
    )
}

export default App01