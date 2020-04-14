import React from "react"
class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        textbox:"",
        pass:"",
        repass:"",
        userLogin :'',
        userPass :'',
        user:[]
    }
    render() {
        const { username,email,textbox,pass,repass,userLogin,userPass } = this.state
        const inputHandler = (event,field) => {
            this.setState({ [field]: event.target.value })
        }
        const usernameBaru = username.toLowerCase()
        const passBaru = pass
        const repassBaru = repass
        const objBaru = {'username':usernameBaru, 'password':passBaru, 'repassBaru':repassBaru}
        let arr = this.state.user.concat(objBaru)

        const registrasi = ()=>{
            if (passBaru==repassBaru) {                
                this.setState({user:arr})
                console.log(arr)
                alert("Data Telah ditambah")
                document.getElementById("idxxx").value=''
                document.getElementById("idxx1").value=``
                document.getElementById("idxx2").value=``
            }
            else{
                alert("Password tidak sama")
            }
            document.getElementById("masuk").innerHTML=``
        }
        const FungsiLogin =(event,field)=>{
            this.setState({ [field]: event.target.value })
        }
        const login =()=>{
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].username == this.state.userLogin && arr[i].password==this.state.userPass) {
                    document.getElementById("masuk").innerHTML=`masuk ${this.state.userLogin}`     
                    break               
                }
                else(
                    document.getElementById("masuk").innerHTML=`gagal login`
                )
            }
        }
        return (
            <div>
                <h3>Auth Screen</h3>
                <div 
                className="container" 
                style={{
                    marginTop:"10px",
                    border:"solid rgb(163, 163, 163) 1px",
                    width:"300px",
                    height:"250px",
                    padding:"15px",
                    borderRadius:"8px"}}
                >
                    <h5 className="mb-2">Register</h5>
                    <input id="idxxx" onChange={(e)=>inputHandler(e,"username")} className="form-control mb-2" type="text" style={{width:"100%"}} placeholder="Username"/>
                    <input id="idxx1" onChange={(e)=>inputHandler(e,"pass")} className="form-control mb-2" type="text" style={{width:"100%"}} placeholder="Password"/>
                    <input id="idxx2" onChange={(e)=>inputHandler(e,"repass")}className="form-control mb-3" type="text" style={{width:"100%"}} placeholder="Repeat Password"/>
                    <input onClick={(e)=>registrasi(e)} className="btn btn-primary"type="submit" style={{width:"100%"}} value="Register"/>
                </div>
                <div 
                className="container" 
                style={{
                    marginTop:"10px",
                    border:"solid rgb(163, 163, 163) 1px",
                    width:"300px",
                    height:"200px",
                    padding:"15px",
                    borderRadius:"8px"}}
                >
                    <h5 className="mb-2">Login</h5>
                    <input onChange={(e)=>{FungsiLogin(e,"userLogin")}}className="form-control mb-2" type="text" style={{width:"100%"}} placeholder="Username"/>
                    <input onChange={(e)=>{FungsiLogin(e,"userPass")}}className="form-control mb-2" type="text" style={{width:"100%"}} placeholder="Password"/>
                    <input onClick={()=>{login()}} className="btn btn-primary"type="button" style={{width:"100%"}} value="Login"/>
                </div>
                <h4 id="masuk"></h4>
            </div>
        )
    }
}

export default InputScreen