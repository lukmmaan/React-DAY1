import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
import { Redirect } from "react-router-dom"
import { onClickLogin,loginHandler } from "../../redux/actions"
import {connect} from 'react-redux'
import Cookie from "universal-cookie"
const cookieObject = new Cookie()
class Login extends Component {
    state = {
        username: "",
        password: "",
        isLoggedin: false
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    loginFungsi = () => {
        const { username, password,isLoggedin } = this.state
        const userData = {
            username,
            password
        }
        this.props.onLogin(userData)
    }
      //1. login dan ubah global state user menjadi data user
  //-> id,username,fullName,role
  //2. check di app.js , jika global state user sudah terisi
  // dengan data user, set cookie dengan data user menggunakan komponen did update
  //3. global state sudah di map ke props melalui function mapstoprops dan di connect
  //4. maka global state = props
  //5. jika global state berubah maka props juga akan berubah
  //6. jika props berubah maka componentdidupdate akan ke-execute/trigger
  componentDidUpdate(){ // berjalan pada saaat ada perubahan/update state atau props
    //this.props.user.id jika data sudah terisi, maka data orang sudah
    // masuk kedalam redux atau sudah berada pada global state
    if (this.props.user.id) { // id tidak 0
        // alert("masuk")
      cookieObject.set("authData", JSON.stringify(this.props.user))
    }
  }
    render() {
        const { username, password, isLoggedin } = this.state
        if (!this.props.user.id) {
            return (
                <div className="App">
                    <h3 className="mb-2">Login</h3>
                    <p>username : {this.props.user.username}</p>
                    <div
                        className="container"
                        style={{
                            marginTop: "10px",
                            border: "solid rgb(163, 163, 163) 1px",
                            width: "300px",
                            height: "160px",
                            padding: "15px",
                            borderRadius: "8px"
                        }}
                    >
                        <input value={username} onChange={(e) => this.inputHandler(e, "username")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Username" />
                        <input value={password} onChange={(e) => this.inputHandler(e, "password")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Password" />
                        <input onClick={this.loginFungsi} className="btn btn-primary" type="submit" style={{ width: "100%" }} value="Login" />
                    </div>  
                </div>
            )
        }
        else {
            return <div className="App">
                <h2>Hell-o {this.props.user.fullName}...!</h2>
            </div>
        }
        //<Redirect to={`/profile/${username}`}></Redirect>
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchtoProps ={
    onLogin: loginHandler
}
export default connect(mapStateToProps, mapDispatchtoProps)(Login)