import styled from 'styled-components'

// 상위가 props로 전달하는 값을 이용해 동적 스타일링 적용 컴포넌트 
const Footer = (props) => {
    // div는 div 컴포넌트를 만드는 함수이다. `` 부분은 div 함수 호출하면서 전달하는 매개변수 
    // 동적 스타일링이 적용된 div컴포넌트를 만들자.  
    const FooterBox = styled.div`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: ${() => (props.theme === 'basic' ? 'skyblue' : 'yellow')};
        text-align: center;
    `
    // return <FooterBox theme={props.theme}>React Styled Component Test</FooterBox>
    return <FooterBox>React Styled Component Test</FooterBox>
}

export default Footer