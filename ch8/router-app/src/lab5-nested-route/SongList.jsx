import React from 'react'
import {Link, Outlet, useMatch} from 'react-router-dom'

const SongList = (props) => {

    // useMatch() : 매개변수에 path 패턴을 지정하고, 해당 패턴에 만족해서 실행된 것인지를 판단, 만족하면 path정보를 넘겨준다.
    // 주로 outer 컴포넌트가 inner 컴포넌트가 실행될 패턴인지를 파악해서, 구체적인 정보를 뽑아서 다양한 ui적인 처리할 때 이용 
    // songs/ 아우터만 실행
    // songs/1 아우터&이너 실행 
    const pathMatch = useMatch('/songs/:id')
    let param_id = 0
    if(pathMatch){
        // outlet에 특정 컴포넌트가 같이 나오는 순간 
        param_id = parseInt(pathMatch.params.id, 10) // 10진수
        console.log('param_id', param_id)
    }

    let list = props.songs.map((song)=>{
        let cn = 'list-group-item'
        cn += param_id === song.id ? ' list-group-item-secondary' : ""
        return (
            <li key={song.id} className={cn}>
                <Link to={`/songs/${song.id}`} style={{textDecoration: 'none'}}>
                    {song.title} ({song.musician})
                    <span className='float-end badge bg-secondary'>
                        <i className='fa fa-play'></i>
                    </span>
                </Link>
            </li>
        )
    })

    return (
        <div className='card card-body'>
            <h2>SongList</h2>
            <ul className='list-group'>{list}</ul>
            {/* 중첩 라우팅에 의해서 결정된 컴포넌트가 나올 자리를 지정 */}
            <Outlet />
        </div>
    )
}

export default SongList