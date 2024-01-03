import { useEffect, useState } from "react";
import DateAndTime from 'date-and-time'

// 여러 컴포넌트에서 현재의 시간정보가 필요하다는 가정
// 시간 정보를 제공하는 커스텀훅 만들기

const useClockTime = (interval, timeFormat) => {
    const [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), timeFormat))

    useEffect(()=>{
        const handle = window.setInterval(() => {
            setCurrentTime(DateAndTime.format(new Date(), timeFormat))
        }, interval)

        // 언마운트될 때 클린업함수 정의 (인터벌 해제)
        return ()=>{
            window.clearInterval(handle)
        }
    }, []) // 마운트될때 최초한번 setInerval 

    return currentTime
}

export {useClockTime}