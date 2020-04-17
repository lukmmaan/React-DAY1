import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
class Registrasi extends Component {
    state = {
        username: "",
        fullName: "",
        password: "",
        role: ""
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    regisSubmit = () => {
        const { username, fullName, password, role } = this.state
        Axios.get(`${API_URL}/users`, {
            params: {
                username: username.toLowerCase()
            }
        })
            .then((res) => { //res = response dari API
                console.log(res.data)
                if (res.data.length >= 1) {
                    alert("Username telah terdaftar")
                }
                else {
                    Axios.post(`${API_URL}/users`,{
                        username: username.toLowerCase(),
                        password: password,
                        role: role,
                        fullName: fullName
                    })
                    .then((res)=>{
                        console.log(res)
                        alert("Data sudah ditambah")
                        this.setState({
                            username:"",
                            password :"",
                            role:"",
                            fullName:""
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            })
            .catch((err) => { //error
                alert("beda")
                console.log(err)
            })

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
                    <input onClick={this.regisSubmit} className="btn btn-primary" type="submit" style={{ width: "100%" }} value="Register" />
                </div>
            </>
        )
    }
}
export default Registrasi