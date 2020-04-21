import React, { Component } from "react"
import {connect} from "react-redux"
class HomeScreen extends Component{
    render(){
        return(
            <div className="App">
                <h4>halo</h4>
                <h3>{this.props.Helloworld}</h3>
                <h3>{this.props.namaPengguna}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        Helloworld: state.haha.todoInput,
        namaPengguna: state.user.username,
    }
}
export default connect(mapStateToProps)(HomeScreen)
