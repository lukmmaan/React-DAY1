import Axios from "axios"
import {API_URL} from '../../Constants/API'
export const UsernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    }
}
export const onClickLogin = (login) => {
    return {
        type: "ON_CLICK_LOGIN",
        payload: login
    }
}
export const loginHandler = (userData) => {
    const {username,password} = userData
    return (dispatch) => {
        Axios.get(`${API_URL}/users`,{
            params:{
                username: username,
                password:password
            }
        })
        .then(res=>{
            if (res.data.length>0) {
                // alert("masuk dong kaka")
                dispatch({
                    type:"ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
            }
            else{
                // alert("tidak masuk kaka")
                dispatch({
                    type:"ON_LOGIN_FAIL",
                    payload: "Username / Password Salah"
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const regisHandler =(userData)=>{
    const {username,fullName,password,role} = userData
    return (dispatch)=>{
        Axios.get(`${API_URL}/users`, {
            params: {
                username: username
            }
        })
        .then((res) => { //res = response dari API
            // console.log(res.data)
            if (res.data.length >= 1) {
                alert("Username " + username + " sudah terpakai")
            }
            else {
                Axios.post(`${API_URL}/users`,{
                    username: username,
                    password: password,
                    role: role,
                    fullName: fullName
                })
                .then((res)=>{
                    // console.log("sukses")
                    console.log(res.data)
                    alert("Data sudah ditambah")
                    dispatch({
                        type:"ON_LOGIN_SUCCESS",
                        payload: res.data
                    })
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
        .catch((err) => { //error
            // alert("beda")
            console.log(err)
        })
    }
}