import React, {useEffect, useState} from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'


// url의 쿼리문자열을 활용하여 페이징 처리
// 현재 페이지가 몇 페이지인지, next, prev 버튼을 클릭했을 때 몇페이지로 전환하는 지에 대한 정보가 전달되어야 함

const About = (props) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1) // 화면 페이지 정보
    const navigate = useNavigate()

    // url의 search문자열이 변경되면 실행
    // search문자열에 page정보가 있다. search 에서 새로운 페이지 정보를 획득해서 state 조정 
    useEffect(() => {
        const strPage = searchParams.get('page') // ~~~?page=2
        setPage(parseInt(strPage !== null ? strPage : "1", 10))
    }, [searchParams]) 

    const goPrev = () =>{
        // 이전 페이지 버튼 클릭 시 search 문자열을 조정해서 페이지 이동하게
        if(page > 1) navigate(location.pathname + "?page=" + (page-1))
    }

    const goNext = () =>{
        navigate(location.pathname + "?page=" + (page+1))
    }

    return (
        <div className='card card-body'>
            <h2>About {props.title}</h2>
            <div>
                <div className='m-2'>현재 페이지 : {page}</div>
                <button className='btn btn-secondary m-1' onClick={goPrev}>Prev</button>
                <button className='btn btn-secondary m-1' onClick={goNext}>Next</button>
            </div>
        </div>
    )
}

export default About