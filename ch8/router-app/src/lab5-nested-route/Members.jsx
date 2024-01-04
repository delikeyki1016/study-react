import React from 'react'
import { useNavigate } from 'react-router'

const Members = (props) => {

    // 화면전환을 하면서 데이터를 전달한다.
    // location.state로 데이터를 전달. 특정화면으로 넘어갈 때, 내가 어떤 url이었어 라는 정보를 전달한다는 가정
    // 예를 들어 로그인한 후 이전에 보던 페이지로 넘어가고자 할때 
    const navigate = useNavigate()
    const goHome = () =>{
        if(window.confirm("홈으로 이동할까요?")) {
            // 데이터를 포함해서 홈으로 이동
            navigate('/', {state: {from:'/members'}})
        }
    }

    // inline style, js object로 작성 
    let imgStyle = {width: 90, height: 90}
    // 상위에서 전달한 데이터개수만큼 목록 구성
    let list = props.members.map((member) => {
        return (
            <div key={member.name} className='col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3'>
                <img src={member.photo} className='img-thumbnail' style={imgStyle} />
                <br />
                <h6>{member.name}</h6>
                <br />
            </div>
        )
    })
    
    return (
        <div>
            <h2 className='m-4'>Members</h2>
            <div className='container'>
                <div className='row'>{list}</div>
            </div>
            <button className='btn btn-secondary' onClick={goHome}>Go home</button>
        </div>
    )
}

export default Members