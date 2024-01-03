// 공통 코드 정의

import {useState, useEffect} from 'react'
import DateAndTime from 'date-and-time'

// high order component 함수 : 컴포넌트를 매개변수(TargetComponent)로 받아서(필요하다면 부가데이터를 매개변수로 더 받을 수 있다) 
// 컴포넌트를 리턴하는 함수 (return (props)=> {})
export const connectClockTime = (TargetComponent, timeFormat, interval) => {
    return (props)=> {
        // position을 props로 받음
        console.log('connectClockTime', props)

        // 공통 코드
        let [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), timeFormat))

        useEffect(()=>{
            const handle = window.setInterval(()=>{
                setCurrentTime(DateAndTime.format(new Date(), timeFormat))
            }, interval)
            return ()=>{
                window.clearInterval(handle)
            }
        }, [])
        // 매개변수 컴포넌트(TargetComponent) 능력치(공통)에 추가된 컴포넌트를 리턴
        // 외부에서 나를 사용하면서 전달한 props를 그대로 포함시켜서
        // 매개변수의 컴포넌트에 이 hof 에서 준비한 데이터 혹은 함수를 추가해서 
        return <TargetComponent {...props} currentTime={currentTime} />
    }
}
