// 외부 파일에서 export default로 공개하는 것은 하나의 컴포넌트만 가능, 받는 이름은 바꿀 수 있다. 
// 외부 파일에서 export { a,b,c }로 공개한다면 여러개를 공개한 것이고, 받는 이름은 바꿀 수 없다. (받는 것은 필요한 것만 받을 수 있다.)
import { PropTypeTest1, PropTypeTest2 } from "./Test1-propType"
import Message from './Message'
import PropTypeTest3 from './Test2-propTypeValid'
import PropBody from "./Test3-body"

const PropTypeComponent = () => {
    const myFun = (x, y) => {
        console.log(`myFun call: ${x + y}`)
    }

    const user = {
        name: 'lee',
        age: 20,
    }

    const array = ['hello', 'world']

    const msgObj = new Message('lee', 'hello')

    return (
        <>
            <PropTypeTest1 id={"kim"} num={10} bool={true} obj={user} fun={myFun} array={array}/>
            <PropTypeTest2 message={msgObj} color={'blue'} width={10} info={{color:'red', weight:30}} nums={[1,2,3]} />
            <PropTypeTest3 oper={"+"} x={5} y={300} />
            <PropBody title="my component title입니다.">반갑습니다. 컴포넌트 body</PropBody>
        </>
    )
}

export default PropTypeComponent
