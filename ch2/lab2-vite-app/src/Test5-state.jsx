// import {} 이것은 여러개 중에 useState만 가져오겠다는 의미 
import { useState } from 'react'

// 상위에서 전달하는 데이터를 props로 받아서 화면에 출력만 하는 stateless component 
const MusicItem = (props) => {
    let item = props.item
    return <li className="list-group-item">{item.no} : {item.title} ({item.artist})</li>
}

const MusicList = (props) => {
    const list = props.music
    let items = list.map((item, index) => {
        return <MusicItem key={item.no} item={item} />
    })
    return <ul className="list-group">{items}</ul>
}

// 상태를 유지하고, 상태값 변경 로직을 가지고, 상태값을 바꾸어 화면 갱신(re-rendering)하는 stateful component
const StateTest = () => {
    // 초기 상태값 선언, useState()의 리턴은 배열
    // 첫번째 변수는 상태 데이터 참조(일반 변수명으로 선언), 두번째 함수는 상태 변경(함수명 스타일로 선언)
    let [list, setList] = useState([
        {no:1, title:'I am', artist: 'ive'},
        {no:2, title:'퀸카', artist: 'idle'},
        {no:3, title:'rain', artist: 'bts'},
        {no:4, title:'eifjeijf', artist: 'black pink'},
    ])

    // 하나의 컴포넌트에서는 useState() 여러개 선언 가능 
    const [count, setCount] = useState(0)

    // 유저 이벤트 발생 시 호출될 개발자 임의 함수 
    const changeList = () => {
        // 상태값 변경, 마지막것을 추출해서 맨앞에 끼워넣기 
        list.unshift(list.pop())
        // 상태값 변경 후 re-rendering 
        setList([...list])
    }

    return (
        <div>
            <h2>State Test</h2>
            <p><MusicList music={list} /></p>
            <p>count: {count}</p>
            <button onClick={changeList}>change list</button>
            <button onClick={()=> setCount(count + 1)}>카운트 증가</button>
        </div>
    )
}

export default StateTest