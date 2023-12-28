import {Component} from 'react'
import {produce} from 'immer'
import App from './App'

// shift+alt+f 들여쓰기 정리 
class AppContainer extends Component {
    state = {
        todoList: [
            {no: 1, todo: 'React 학습', done: false},
            {no: 2, todo: 'Algorithm 문제풀이', done: true},
            {no: 3, todo: 'Node 서버 연동 실습', done: false},
            {no: 4, todo: 'Javascript 학습', done: false},
        ]
    }

    addTodo = (todo) => {
        let newTodoList = produce(this.state.todoList, (draft) => {
            draft.push({no: new Date().getTime(), todo: todo, done: false})
        })
        this.setState({todoList: newTodoList})
    }

    deleteTodo = (no) => {
        let index = this.state.todoList.findIndex((todo) => todo.no === no) 
        let newTodoList = produce(this.state.todoList, (draft) => {
            draft.splice(index, 1)
        })
        this.setState({todoList: newTodoList})
    }

    toggleDone = (no) => {
        let index = this.state.todoList.findIndex((todo) => todo.no === no)
        let newTodoList = produce(this.state.todoList, (draft)=>{
            draft[index].done = !draft[index].done
        })
        this.setState({todoList: newTodoList})
    }

    render() {
        // console.log("렌더: App Container...")
        return (            
            <div>
                <App todoList={this.state.todoList} addTodo={this.addTodo} 
                deleteTodo={this.deleteTodo} toggleDone={this.toggleDone} />
            </div>
        )
    }
}

export default AppContainer