import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'

// SongList에서 항목 클릭 시 출력되는 컴포넌트, SongList에서 유저가 클릭한 항목의 데이터를 전달받아야 한다. params를 이용
const SongDetail = (props) => {
    // 자신이 실행된 url path 에서 데이터 추출
    // path가 ~/songs/:id 조건이라는 가정
    const {id} = useParams()
    // Link는 유저에게 화면을 제공하는 컴포넌트
    // 직접 코드에서 url을 조정할 수 있는 api도 필요 => useNavigate
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [musician, setMusician] = useState("")
    const [link, setLink] = useState("")
    const YOUTUBE_LINK = "http://m.youtube.com/watch?v="

    // props로 전체 노래 목록 데이터가 전달될 것이고, 그중에 어느 노래인 지 url param 으로 전달
    // 전체 목록 중에서 url param에 해당되는 데이터를 추출해서 사용
    useEffect(()=>{
        const song = props.songs.find((song) => song.id == parseInt(id ? id : "", 10))
        if(song) {
            setLink(song.youtube_link ? YOUTUBE_LINK+song.youtube_link : "")
            setTitle(song.title ? song.title : "")
            setMusician(song.musician ? song.musician : "")
        } else {
            // url param 이 이상한 것이 들어와서, 그 param에 해당되는 song 정보가 없다면 화면을 목록으로 돌린다.
            navigate('/songs')
        }
    }, [])

    return (
        <div className='mt-5'>
            <h2>{title}</h2>
            <p>musician: {musician}</p>
            <p>
                <a href={link} target='new'>Youtube</a>
            </p>
            <Link to="/songs">목록으로 가기</Link>
        </div>
    )
}

export default SongDetail