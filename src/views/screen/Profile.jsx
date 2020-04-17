import React, { Component } from "react"
import Axios from "axios"
import { API_URL } from "../../Constants/API"
class Profile extends Component {
    state = {
        userlist: [],
        nama: "",
        fullNama:"",
        roleOrang:"",
    }
    componentDidMount() {
        Axios.get(`${API_URL}/users`, {
            params: {
                username: this.props.match.params.username
            }
        })
            .then((res) => {
                this.setState({ userlist: res.data }) 
                this.setState({
                    nama:this.state.userlist[0].username,
                    fullNama:this.state.userlist[0].fullName,
                    roleOrang:this.state.userlist[0].role
                })
                // console.log(this.state.nama+this.state.fullNama+this.state.roleOrang)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const {nama,fullNama,roleOrang} = this.state
        return (
            <div className="App">
            <div
                className="container"
                style={{
                    marginTop: "40px",
                    border: "solid rgb(163, 163, 163) 1px",
                    width: "100%",
                    height: "100%",
                    padding: "15px",
                    borderRadius: "8px"
                }}
            >
                <h3>Nama Lengkap Anda   : {fullNama}</h3>
                <h4>Nama Panggilan Anda : {nama}</h4>
                <h4>Role Anda Sebagai   : {roleOrang}</h4>
            </div>
        </div>

        )
    }
}
export default Profile