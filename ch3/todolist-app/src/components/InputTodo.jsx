import {useState} from 'react'
import PropTypes from 'prop-types'

const InputTodo = (props) => {
    // 이 컴포넌트는 화면을 목적으로 하는 프리젠테이셔널 컴포넌트 
    // controlled 컴포넌트를 만들려면 유저 입력부분이 state로 제어되어야 함 
    const [todo, setTodo] = useState("")

    const addHandler = () => {
        // 유저 입력 후에 최종 todoList 추가하고자 하는 이벤트 발생 시 호출
        // todoList는 상위에서 관리, 상위의 함수를 호출해서 상태 유지되게 함
        props.addTodo(todo)
        // 화면에 유저 입력 글을 지운다.
        setTodo("")
    }

    const enterInput = (e) => {
        // 키보드 이벤트 추가
        if(e.key === 'Enter') {
            addHandler()
        }
    }

    const changeTodo = (e) => {
        // 유저가 input에서 글을 입력하는 순간
        setTodo(e.target.value)
    }

    return (
        <div className='row'>
            <div className='col'>
                <div className='input-group'>
                    <input id="msg" name='msg' type="text" className='form-control' placeholder='할일을 입력하세요' 
                    value={todo} onChange={changeTodo} onKeyUp={enterInput} />
                    <span className='btn btn-primary input-group-addon' onClick={addHandler}>추가</span>
                </div>
            </div>
        </div>
    )
}

InputTodo.propTypes = {
    addTodo: PropTypes.func
}

export default InputTodo