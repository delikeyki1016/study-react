// BrowserRouter를 사용할 수 있는 전제 
// 1. 브라우저가 html5 history api 지원 ==> 요즘은 다 지원 
// 2. fallback UI(웹서버가 잘못된 url이 들어왔을 때 기본페이지를 응답할 수 있는 기능)를 지원 => 웹서버 설정은 간단하다.
// ==> BrowserRouter 가 가장 많이 사용하는 라우터
// BrowserRouter는 path까지만을 감지함 
// HashRouter : URI에 해시값을 이용한 라우터 #a1 ==> 지금은 안쓴다
// MemoryRouter : url정보를 주소표시줄에 나타내지 않고 메모리에 유지함(리액트 네이티브, 하이브리드 앱에 적합)
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Members from './Members'
import SongList from './SongList'
import Player from './Player'
import Default from './Default'

const App05 = () => {

    const [members] = useState([
        {name:'Kim', photo:'photos/Mag.png'},
        {name:'Lee', photo:'photos/JPike.jpg'},
        {name:'Park', photo:'photos/King.png'},
        {name:'Hong', photo:'photos/Sam.png'},
        {name:'Jung', photo:'photos/Tim.png'},
        {name:'Kang', photo:'photos/Toby.jpg'},
    ])

    const [songs] = useState([
        { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
        { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
        { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
        { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
        { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
        { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
        { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
        { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
    ])

    return (
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About title={'뉴진스'} />} />
                    <Route path='/members' element={<Members members={members} />} />
                    <Route path='/songs' element={<SongList songs={songs} />}>
                        {/* <Outlet /> 위치에 출력되는 컴포넌트들 */}
                        {/* 하위 경로로 들어가지 않는 default 설정 가능, 아래의 index는 예약어 */}
                        {/* <Route index element={<><hr/><h3>현재 재생중인 곡 없음</h3></>} /> */}
                        <Route index element={<Default />} />
                        <Route path=':id' element={<Player songs={songs} />} />
                    </Route>
                    {/* 존재하는 경로가 없을 때 보여줄 라우트 */}
                    <Route path='*' element={<><hr/><h3>Not Found</h3></>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App05
