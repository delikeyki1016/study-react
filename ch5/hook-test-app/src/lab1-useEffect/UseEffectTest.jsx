import {useState, useEffect} from 'react'

const UseEffectComponent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("kim")

    // 컴포넌트 라이프사이클과 관련된 함수 등록을 위한 hook
    // didMount, didUpdate시 호출, 의존성을 지정하지 않으면 리랜더링될때마다 항상 호출
    // useEffect(()=>{
    //     console.log(`${name}님이 ${count}번 클릭`)
    // })

    // 두번째 매개변수를 지정하면, 해당 값이 변경되는 경우에만 호출(의존성 지정), [name, count] 이렇게도 사용가능
    // useEffect(()=>{
    //     console.log(`이름: ${name}`)
    // }, [name])

    // useEffect(()=>{
    //     console.log(`count: ${count}`)
    // }, [count])

    // 마운트될때만 사용. 즉 최초에만 한번 실행됨 
    useEffect(()=>{
        console.log(`${name}, ${count}`)
    }, [])

    return (
        <div>
            <h3>useEffect test</h3>
            <p>name: <input type='text' value={name} onChange={(e)=> setName(e.target.value)} /></p>
            <button type='button' onClick={()=>setCount(count+1)}>카운트 증가</button>
            <p>{name} 님이 {count} 번 클릭했습니다.</p>
        </div>
    )
}

export default UseEffectComponent
