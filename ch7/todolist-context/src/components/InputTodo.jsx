import {useContext, useState} from 'react'
import TodoContext from '../TodoContext'

const InputTodo = () => {
    const [todo, setTodo] = useState("")

    // context에 공개된 상태,함수를 이용하겠다면 useContext를 이용
    const value = useContext(TodoContext)

    const addHandler = () => {
        // props.addTodo(todo)
        value.actions.addTodo(todo)
        setTodo("")
    }

    const enterInput = (e) => {
        if(e.key === 'Enter') {
            addHandler()
        }
    }

    const changeTodo = (e) => {
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

export default InputTodo