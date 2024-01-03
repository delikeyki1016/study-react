import React, {useEffect, useState} from 'react'
import DateAndTime from 'date-and-time'

const Clock = (props) => {
    const [currentTime, setCurrentTime] = useState(new Date())

    // 마운트될 때 최초 한번만 실행되게 처리, 두번째 매개변수에 []
    useEffect(() => {
        const handle = setInterval(()=>{
            setCurrentTime(new Date())
            console.log('틱톡 클락')
        }, 1000)

        // 언마운트 시에 실행되게 처리하려면 함수를 리턴시킨다.(cleanup 함수)
        return ()=> {
            clearInterval(handle)
        }
    }, [])

    return (
        <div>
            <h3>{DateAndTime.format(currentTime, props.formatString)}</h3>
        </div>
    )
}

export default Clock