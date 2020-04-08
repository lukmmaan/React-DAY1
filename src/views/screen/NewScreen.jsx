import React from "react"

const Tombol = ()=>{
    const ClickMe =()=>{
        alert("yoah")
    }
    return(
        <div>
            <input onClick={ClickMe} type="button" value="Click Me!"/>
        </div>
    )
}
const NewScreen = () =>{
    let hallo = "hai lukman yudokusumo"
    return(
        <div>
            <h1>halo lukman, {hallo}</h1>
            <Tombol/>
        </div>
    )
}

export default NewScreen