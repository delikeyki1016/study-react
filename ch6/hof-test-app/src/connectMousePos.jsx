// 공통 코드 정의

import { useEffect, useState } from "react"

// high order component 
export const connectMousePos = (TargetComponent) => {
    return (props) => {
        // props에 받은 것이 없다.
        console.log('MousePos', props)
        let [position, setPosition] = useState({x:0, y:0})
        useEffect(()=>{
            const onMove = (e) => setPosition({x: e.pageX, y: e.pageY})
            window.addEventListener('mousemove', onMove)

            return ()=>{
                window.removeEventListener('mousemove', onMove)
            }
        }, [])
        return <TargetComponent {...props} position={position} />
    }
}