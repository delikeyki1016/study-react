// react-router-dom에서 export 시킨 BrowserRouter 이름 그대로 사용해도 되고, as로 이름을 바꾸어서 사용해도 된다.
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Members from './Members'
import SongList from './SongList'

const App01 = () => {
    return (
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    {/* 작업순서: path교체 -> url변경 이벤트 감지(Router) -> path 추출 -> path에 맞는 컴포넌트 출력 */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/members' element={<Members />} />
                    <Route path='/songs' element={<SongList />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App01
