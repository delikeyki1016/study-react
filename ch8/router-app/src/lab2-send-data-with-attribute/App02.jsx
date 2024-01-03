import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Members from './Members'
import SongList from './SongList'

// public 폴더 - app에 의해 제어될 필요가 없는 브라우저에 그대로 다운로드 되어야 하는 파일들이 위치
const App02 = () => {

    const [members] = useState([
        {name:'Kim', photo:'photos/Mag.png'},
        {name:'Lee', photo:'photos/JPike.jpg'},
        {name:'Park', photo:'photos/King.png'},
        {name:'Hong', photo:'photos/Sam.png'},
        {name:'Jung', photo:'photos/Tim.png'},
        {name:'Kang', photo:'photos/Toby.jpg'},
    ])
    return (
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* 라우팅되는 컴포넌트에 속성으로 데이터 전달 */}
                    <Route path='/about' element={<About title={'뉴진스'} />} />
                    <Route path='/members' element={<Members members={members} />} />
                    <Route path='/songs' element={<SongList />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App02
