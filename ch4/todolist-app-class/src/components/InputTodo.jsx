import React, {Component} from 'react'
import PropTypes from 'prop-types'

class InputTodo extends Component {
    iptRef = React.createRef()

    state = {
        todo: ""
    }

    addHandler = () => {
        this.props.addTodo(this.state.todo)
        this.setState({todo:""})
    }

    enterInput = (e) => {
        if(e.key === 'Enter') {
            this.addHandler()
        }
    }

    changeTodo = (e) => {
        this.setState({todo: e.target.value})
    }

    // 돔트리에 마운트가 완료되었을 때 최초 한번 실행. input에 포커스 주기
    componentDidMount = () =>{
        this.iptRef.current.focus()
    }

    // DOM 업데이트가 일어난 직후 실행
    componentDidUpdate(prevProps, prevState) {
        this.iptRef.current.focus()
    }

    render() {
        console.log('랜더: InputTodo...')
        return (
            <div className='row'>
                <div className='col'>
                    <div className='input-group'>
                        <input id="msg" name='msg' type="text" className='form-control' placeholder='할일을 입력하세요' 
                        value={this.state.todo} onChange={this.changeTodo} onKeyUp={this.enterInput}
                        ref={this.iptRef} />
                        <span className='btn btn-primary input-group-addon' onClick={this.addHandler}>추가</span>
                    </div>
                </div>
            </div>
        )
    }
}

InputTodo.propTypes = {
    addTodo: PropTypes.func
}

export default InputTodo