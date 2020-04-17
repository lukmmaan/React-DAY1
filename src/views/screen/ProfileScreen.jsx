import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
class ProfileScreen extends Component {
    state = {
        userlist: []
    }

    getDataHandler = () => {
        // Axios.get("http://localhost:3001/users/1") //request by id dan hasil sebuah 1 objek
        // Axios.get("http://localhost:3001/users",{ //http://localhost:3001/users?role=user&username=seto
        //     params:{
        //         role:"user",
        //         username:"pikachu",
        //     }
        // })
        Axios.get("http://localhost:3001/users") //hasil array seluruh table
            .then((res) => { //res = response dari API
                console.log(res.data)
                this.setState({ userlist: res.data })
            })
            .catch((err) => { //error
                console.log(err)
            })
    }
    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/9`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    postDataHandler = () => {
        Axios.post(`${API_URL}/users`, { //mengasih objek
            username: "Alex",
            password: "123123123",
            role: "Admin",
            fullName: "Alex Turner"
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <input
                    onClick={this.getDataHandler}
                    className="btn btn-success"
                    type="button"
                    value="Get Data" />
                <input
                    onClick={this.deleteDataHandler}
                    className="btn btn-danger"
                    type="button"
                    value="Delete Data" />
                <input
                    onClick={this.postDataHandler}
                    className="btn btn-primary"
                    type="button"
                    value="Post Data" />
            </div>
        )
    }
}
export default ProfileScreen