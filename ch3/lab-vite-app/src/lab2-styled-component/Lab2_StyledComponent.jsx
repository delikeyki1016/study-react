import { useState } from 'react'
import Footer from './Footer'
import { BasicButton, UnderlineButton, WhiteUnderLineButton } from './Buttons'

const StyledComponent = () => {
    // 컴포넌트 상태 표현
    const [theme, setTheme] = useState('basic')

    return (
        <div>
            <BasicButton onClick={()=> theme === 'basic' ? setTheme('yellow') : setTheme('basic')}>Basic</BasicButton>
            <UnderlineButton>UnderLine</UnderlineButton>
            <WhiteUnderLineButton>White UnderLine</WhiteUnderLineButton>
            <Footer theme={theme} />
        </div>
    )
}

export default StyledComponent