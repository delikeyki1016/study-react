import {Link} from 'react-router-dom'

// 주메뉴
const Header = () => {
    return (
        <div className='card bg-light'>
            <div className='card-heading'>
                <h2>My App</h2>
                <div className='row'>
                    <div className='col-12'>
                        {/* url path를 쉽게 교체하기 위한 Link 컴포넌트 */}
                        <Link className='btn btn-success menu' to='/'>Home</Link>
                        <Link className='btn btn-success menu' to='/about'>About</Link>
                        <Link className='btn btn-success menu' to='/members'>Members</Link>
                        <Link className='btn btn-success menu' to='/songs'>Songs</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header