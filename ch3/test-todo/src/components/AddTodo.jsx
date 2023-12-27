import {useState} from 'react'
import PropTypes from 'prop-types'

const AddTodo = (props) => {
    const [todo, setTodo] = useState("")

    const addHandler = () => {
        props.addTodo(todo)
        setTodo("")
    }

    const changeMsg = (e) => {
        setTodo(e.target.value)
    }

    const enterKey = (e) => {
        if (e.key === 'Enter') addHandler()
    }

    return (
        <div className='input-group'>
            <input type="text" value={todo} onChange={changeMsg} onKeyUp={enterKey} 
            placeholder='할일을 입력해주세요' className='form-control' />
            <button type="button" onClick={addHandler} className='btn btn-primary input-group-addon'>추가</button>
        </div>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default AddTodo