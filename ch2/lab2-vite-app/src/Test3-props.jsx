const PropsTest1 = () => {
    let name = 'kim'
    let user = {
        name: 'lee',
        age: 20
    }

    return (
        <div className="container">
            <h2>Props Test1</h2>
            {/* props 전달 안했을 때 */}
            <Sub1 />
            {/* 하위에 데이터 전달은 속성으로. 하위에서는 속성명으로 데이터를 이용 */}
            <Sub1 name={name} />
            <Sub1 name={name} age='10' />
            {/* 객체 전달 */}
            <Sub2 user={user} />
            {/* 속성여러개 일때  */}
            <Sub3 name="park" addr="seoul" age="30" email="abc@a.com" />
            <Sub4 name="jung" addr="busan" age="35" email="edf@b.com" />
            {/* 객체를 전달할 때 Sub2처럼 객체를 직접 전달하면 하위에서 props.객체명.변수명 */}
            {/* 객체전달을 전개연산자(spread operator ...) 사용할 수 있다. 객체 하나를 전달하는 것이 아니라, 분해되어 전달. 총 2개 전달 */}
            <Sub5 {...user} />
        </div>
    )
}

const Sub1 = (props) => {
    console.log(props)
    return <p>I am Sub1, name:{props.name}, age:{props.age}</p>
}

const Sub2 = (props) => {
    return <p>I am Sub2, name:{props.user.name}, age:{props.user.age}</p>
}

// 속성이 여러개일 때, 매개변수에 {}을 선언하고 여러개의 변수를 나열해서 매핑시킬 수도 있다.
// 속성 선언 순서와 {} 변수의 순서가 다르다. 순서는 의미없고, 속성명에 해당되는 변수에 대입됨
const Sub3 = ({name, age, addr, email}) => {
    return <p>I am Sub3, name:{name}, age:{age}, email:{email}, addr:{addr}</p>
}

// props를 이용하지 않고 {} 받을 때, 속성명에 대한 {} 변수명을 다르게 받아야 한다면 
// {name} 은 {name: name}의 축약형 {속성명:변수명}
const Sub4 = ({name: name1, age: age1, addr: addr1, email: email1}) => {
    return <p>I am Sub4, name:{name1}, age:{age1}, addr:{addr1}, email:{email1}</p>
}

const Sub5 = (props) => {
    return <p>I am Sub5, name:{props.name}, age:{props.age}</p>
}

export default PropsTest1