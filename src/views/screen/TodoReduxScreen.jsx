import React, { Component } from "react"
import {connect} from "react-redux"
import {todoInputHandler,UsernameInputHandler,todoChangeHandler} from "../../redux/actions"
class TodoReduxScreen extends Component{
    render() {
        return (
            <div className="App container">
                <h3>helloo</h3>
                {/* <h4>{this.props.todo}</h4>
                <h4>{this.props.nama}</h4> */}
                <input type="text" className="form-control" placeholder="input 2"
                onChange={(e)=>this.props.onchangeTodo(e.target.value)}
                />
                {/* <input type="text" className="form-control" placeholder="input 2"
                onChange={(e)=>this.props.onchangeUsername(e.target.value)}
                /> */}
                <input className="btn btn-primary" type="button" value="Submit"
                onClick={()=>this.props.onClickTodo(this.props.todo2)}
                />
                {this.props.todo.map((val)=>{
                    return <p>
                        {val}
                    </p>
                })}
                <p>{this.props.todo2}</p>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        todo2: state.haha.todoInput,
        todo: state.haha.todoList,
        nama: state.user.username,
        todo2: state.haha.todoInput
    }
}
const mapDispatchtoProps={
    onClickTodo:todoInputHandler,
    onchangeUsername: UsernameInputHandler,
    onchangeTodo: todoChangeHandler
}

export default connect(mapStateToProps,mapDispatchtoProps)(TodoReduxScreen)