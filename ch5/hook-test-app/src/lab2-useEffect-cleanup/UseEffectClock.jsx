import React, {useState} from 'react'

import Clock from './Clock'

const UseEffectClock = () => {
    const [clockVisible, setClockVisible] = useState(false)

    // HH:mm:ss => 시분초, YYYY/MM/DD => 년월일
    return (
        <div>
            <hr/>
            <h2>시계</h2>
            <button type='button' onClick={()=>setClockVisible(!clockVisible)}>show/hide clock</button>
            {clockVisible ? <Clock formatString={'HH:mm:ss'} /> : ""} 
        </div>
    )
}

export default UseEffectClock