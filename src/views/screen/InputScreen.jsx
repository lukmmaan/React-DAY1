import React from "react"
import {Link,Redirect} from "react-router-dom"
class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        textbox: "",
        pass: "",
        repass: "",
        userLogin: '',
        userPass: '',
        user: [],
        isLogin: false,
        currentUsername: "",
        activeEditIdx: null
    }
    inputHandler = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    // usernameBaru = username.toLowerCase()
    // passBaru = pass
    // repassBaru = repass
    // objBaru = { 'username': usernameBaru, 'password': passBaru, 'repPassword': repassBaru }
    // let arr = this.state.user.concat(objBaru)

    registrasi = () => {
        const { pass, repass, username, user } = this.state
        if (pass == repass) {
            // this.setState({user:arr})
            // console.log(arr)
            let newData = {
                username,
                pass,
                repass
            }
            this.setState({
                user: [newData, ...user],
                username: '',
                pass: '',
                repass: ''
            })
            console.log(user)
            alert("Data Telah ditambah")
        }
        else {
            alert("Password tidak sama")
        }
    }
    FungsiLogin = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    deleteHandler = (idx) => {
        const { user } = this.state;
        let temp = [...user];

        temp.splice(idx, 1);

        this.setState({ user: temp });
    };
    renderuser = () => {
        const { user, activeEditIdx } = this.state
        return (user.map((val, idx) => {
            if (idx == activeEditIdx) {
                return (
                    <tr>
                        <td>{idx + 1}</td>
                        {/* <td>{val.username}</td> */}
                        <td>
                            <input type="text" placeholder={val.username} />
                        </td>
                        <td>
                            <input
                                type="button"
                                value="Delete"
                                className="btn btn-danger"
                                onClick={() => this.deleteHandler(idx)}
                            />
                        </td>
                    </tr>
                );
            } else {
                return (
                    <tr>
                        <td>{idx + 1}</td>
                        <td>{val.username}</td>
                        <td>
                            <Link to={`profile/${val.username}`}>
                            <input
                                className="btn btn-primary mr-4"
                                type="button"
                                value="Login" />
                            </Link>
                            <input
                                type="button"
                                value="Edit"
                                className="btn btn-info"
                                onClick={() => this.setState({ activeEditIdx: idx })}
                            />
                        </td>
                    </tr>
                );
            }
        })

        )
    }
    login = () => {
        const { userLogin, userPass, isLogin, currentUsername, user } = this.state
        for (let i = 0; i < user.length; i++) {
            if (user[i].username == userLogin && user[i].pass == userPass) {
                this.setState({
                    userLogin: '',
                    userPass: '',
                    isLogin: true,
                    currentUsername: user[i].username,
                })
                break
            }
            else (
                alert("gagal login")
            )
        }
    }

    render() {
        const { username, email, textbox, pass, repass, userLogin, userPass, user, isLogin, currentUsername } = this.state
        if (!isLogin) {
            return (
                <div className="App">
                    <h3 className="App">Auth Screen</h3>
                    <div
                        className="container"
                        style={{
                            marginTop: "10px",
                            border: "solid rgb(163, 163, 163) 1px",
                            width: "300px",
                            height: "250px",
                            padding: "15px",
                            borderRadius: "8px"
                        }}
                    >
                        <h5 className="mb-2">Register</h5>
                        <input id="idxxx" value={username} onChange={(e) => this.inputHandler(e, "username")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Username" />
                        <input id="idxx1" value={pass} onChange={(e) => this.inputHandler(e, "pass")} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Password" />
                        <input id="idxx2" value={repass} onChange={(e) => this.inputHandler(e, "repass")} className="form-control mb-3" type="text" style={{ width: "100%" }} placeholder="Repeat Password" />
                        <input onClick={(e) => this.registrasi(e)} className="btn btn-primary" type="submit" style={{ width: "100%" }} value="Register" />
                    </div>
                    <div
                        className="container"
                        style={{
                            marginTop: "10px",
                            border: "solid rgb(163, 163, 163) 1px",
                            width: "300px",
                            height: "200px",
                            padding: "15px",
                            borderRadius: "8px"
                        }}
                    >
                        <h5 className="mb-2">Login</h5>
                        <input value={userLogin} onChange={(e) => { this.FungsiLogin(e, "userLogin") }} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Username" />
                        <input value={userPass} onChange={(e) => { this.FungsiLogin(e, "userPass") }} className="form-control mb-2" type="text" style={{ width: "100%" }} placeholder="Password" />
                        <input onClick={() => { this.login() }} className="btn btn-primary" type="button" style={{ width: "100%" }} value="Login" />
                    </div>
                    {isLogin ? <h2>Welcome {currentUsername}</h2> : null}
                    <br />
                    {/* <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>No.</td>
                                    <td>Username</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderuser()}
                            </tbody>
                        </table>
                    </div> */}
                </div>
            )    
        }
        else{
            return <Redirect to={`profile/ ${currentUsername}`}></Redirect>
            // return(
            //     <Link to={`profile/ ${currentUsername}`}>Continue to Profile Page</Link>
            // )
        }
    }
}

export default InputScreen