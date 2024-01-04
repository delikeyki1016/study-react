import React from 'react'

const Members = (props) => {
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
        </div>
    )
}

export default Members