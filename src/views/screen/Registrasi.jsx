import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
import {Button,Spinner} from "reactstrap"
import {regisHandler} from "../../redux/actions"
import {connect} from "react-redux"
import Login from "./Login"
class Registrasi extends Component {
    state = {
        username: "",
        fullName: "",
        password: "",
        role: "",
        isLoading : false
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    regisSubmit = () => {
        const { username, fullName, password, role } = this.state
        // this.setState({isLoading:true})
        // setTimeout(()=>{
            const userData = {
                username,
                password,
                fullName,
                role,
            }
              this.props.onRegis(userData)
        // },1500) 
    }
    render() {
        const { username,fullName,password,role } = this.state
        return (
            <>
                <h3 className="App">Registrasi Screen</h3>
                <div
                    className="container"
                    style={{
                        marginTop: "10px",
                        border: "solid rgb(163, 163, 163) 1px",
                        width: "300px",
                        height: "270px",
                        padding: "15px",
                        borderRadius: "8px"
                    }}
                >
                    <input value={username} onChange={(e) => this.inputHandler(e, "username")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Username" />
                    <input value={fullName} onChange={(e) => this.inputHandler(e, "fullName")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Full Name" />
                    <input value={password} onChange={(e) => this.inputHandler(e, "password")} className="form-control mb-3" type="text" style={{ width: "100%" }} placeholder="Password" />
                    <input value={role}onChange={(e) => this.inputHandler(e, "role")} className="form-control mb-3" type="text" style={{ width: "100%" }} placeholder="Role" />
                    <input  onClick={this.regisSubmit} className="btn btn-primary" type="submit" style={{ width: "100%" }} value="Register" />
                </div>
                <p className="App">{this.props.user.fullName}</p>
            </>
        )
        // disabled={this.state.isLoading}
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchtoProps ={
    onRegis: regisHandler
}
export default connect (mapStateToProps,mapDispatchtoProps)(Registrasi)