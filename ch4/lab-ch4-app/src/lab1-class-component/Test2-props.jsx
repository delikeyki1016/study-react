import React from 'react'
import PropTypes from 'prop-types'

class PropsComponent extends React.Component {
    myFun(x,y) {
        console.log(`myFun call: ${x + y}`)
    }
    user = {
        name: 'kim',
        age: 20,
    }
    arr = ['hello', 'world']

    render() {
        return (
            <div>
                <h2>Props Test</h2>
                <PropsSubComponent 
                    id={this.user.name} 
                    num={10} 
                    bool={true} 
                    fun={this.myFun}
                    obj={this.user}
                    arr={this.arr} 
                />
            </div>
        )
    }
}

class PropsSubComponent extends React.Component {
    render() {
        return (
            <div>
                {/* 함수형 컴포넌트를 선언하면 상위 컴포넌트가 전달한 데이터를 받는 변수를 props가 아닌 임의 이름으로 선언해도 되지만 */}
                {/* 클래스 컴포넌트는 우리가 선언하지 않아도 내부적으로 props로 선언되어 상위 데이터가 담긴다. this.props로 이용 */}
                <p>id: {this.props.id}, num: {this.props.num}, bool: {this.props.bool}</p>
                <p>name: {this.props.obj['name']}, age: {this.props.obj.age}</p>
                <div>
                    {this.props.arr.map((item, index)=> ( //{}가 아닌 () 태그를 쓸 때 한줄일 경우 () 생략가능. {}을 쓰려면 return과 함께
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <p>
                    <button onClick={() => this.props.fun(10, 20)}>함수 콜</button>
                </p>
            </div>
        )
    }
}

// propTypes 명시는 클래스 밖에서.
PropsSubComponent.propTypes = {
    id: PropTypes.string.isRequired,
    num: PropTypes.number,
    fun: PropTypes.func,
    bool: PropTypes.bool,
    obj: PropTypes.object,
    arr: PropTypes.array,
}

export default PropsComponent