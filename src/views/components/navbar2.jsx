import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {logoutHandler} from '../../redux/actions'
import Cookie from "universal-cookie"
const cookieObject = new Cookie()
class Navbar extends React.Component{
    Logout = ()=>{
        alert(this.props.todo.fullName + " akan Logout")
        this.props.logoutHandler()
        cookieObject.remove("authData")
    }
    render(){
        if (this.props.todo.username) {
            return(
                <div className="d-flex justify-content-around align-items-center"
                    style={{
                        height:"80px",
                        borderBottom:"1px solid blue"
                    }}
                >
                    <Link to="/"> &#128523;</Link>
                    <Link to="/registrasi">Registrasi</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/input">Input</Link>
                    {this.props.todo.username}
                    <input onClick={this.Logout} className="btn btn-danger" type="button" value="Logout"/>
                </div>
            )
        }
        else{
            return(
                <div className="d-flex justify-content-around align-items-center"
                    style={{
                        height:"80px",
                        borderBottom:"1px solid blue"
                    }}
                >
                    <Link to="/"> &#128523;</Link>
                    <Link to="/registrasi">Registrasi</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/input">Input</Link>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state)=>{
    return{
        todo:state.user
    }
}
const mapDispatchtoProps ={
    logoutHandler
}
export default connect(mapStateToProps,mapDispatchtoProps)(Navbar)
