import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
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
            </div>
        )
    }
}
export default Navbar
