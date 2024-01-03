import React from 'react'
// 파일에서 default로 export시킨것이 아니다. {}로 export시킨 이름 그대로 사용함
import { useMousePosition } from './useMousePosition'
import { useClockTime } from './useClockTime'

const CustomHookComponent = () => {
    const position = useMousePosition()
    const currentTime = useClockTime(1000, 'HH:mm:ss')

    return (
        <div>
            <h2>Custom Hook Test</h2>
            <p>mouse position: {position.x}, {position.y}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}

export default CustomHookComponent