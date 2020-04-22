import React, { Component } from "react"
import {connect} from "react-redux"
import {todoInputHandler,UsernameInputHandler,todoChangeHandler,loginHandler} from "../../redux/actions"
class TodoReduxScreen extends Component{
    render() {
        return (
            <div className="App container">
                {/* <h3>helloo</h3> */}
                {/* <h4>{this.props.todo}</h4>
                <h4>{this.props.nama}</h4> */}
                {/* <input type="text" className="form-control" placeholder="input 2"
                onChange={(e)=>this.props.onchangeTodo(e.target.value)}
                /> */}
                {/* <input type="text" className="form-control" placeholder="input 2"
                onChange={(e)=>this.props.onchangeUsername(e.target.value)}
                /> */}
                {/* <input className="btn btn-primary" type="button" value="Submit"
                onClick={()=>this.props.onClickTodo(this.props.todo2)}
                />
                {this.props.todo.map((val)=>{
                    return <p>
                        {val}
                    </p>
                })}
                <p>{this.props.todo2}</p> */}
                <h1>Todo Screen</h1>
                <p>Testing1: {this.props.user.testing}</p>
                <p>Testing2: {this.props.user.testing2}</p>
                <input className="btn btn-primary" type="button" value="Testing" onClick={this.props.onLogin}/>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        todo2: state.haha.todoInput,
        todo: state.haha.todoList,
        nama: state.user.username,
        todo2: state.haha.todoInput,
        user: state.user
    }
}
const mapDispatchtoProps={
    onClickTodo:todoInputHandler,
    onchangeUsername: UsernameInputHandler,
    onchangeTodo: todoChangeHandler,
    onLogin: loginHandler
}

export default connect(mapStateToProps,mapDispatchtoProps)(TodoReduxScreen)