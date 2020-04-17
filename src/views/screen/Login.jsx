import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
import { Redirect } from "react-router-dom"
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
        const { username, password } = this.state
        Axios.get(`${API_URL}/users`, {
            params: {
                username: username.toLowerCase(),
                password: password
            }
        })
            .then((res) => {
                // console.log(res.data)
                if (res.data.length >= 1) {
                    return (
                        // alert("selamat datang " + username)
                        this.setState({
                            isLoggedin: true
                        })
                    )
                }
                else {
                    alert("Username/password anda salah")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { username, password, isLoggedin } = this.state
        if (!isLoggedin) {
            return (
                <div className="App">
                    <h3 className="mb-2">Login</h3>
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
        else{
            return <Redirect to={`/profile/${username}`}></Redirect>
        }
    }
}
export default Login