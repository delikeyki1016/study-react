import styled from 'styled-components'

// 동적 스타일링을 적용해 button 컴포넌트를 만드는 함수 button`` 
const BasicButton = styled.button`
    background-color: purple;
    color: yellow;
    padding: 5px 10px;
    margin: 5px;
`

// 위의 스타일 + 추가속성
const UnderlineButton = styled(BasicButton)`
    text-decoration: underline;
`

// 위의 스타일 + 추가속성
const WhiteUnderLineButton = styled(UnderlineButton)`
    color: white;
`

// 여러개를 한꺼번에 export 
export { BasicButton, UnderlineButton, WhiteUnderLineButton }