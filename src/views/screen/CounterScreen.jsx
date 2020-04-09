import React from "react"

const CounterScreen = (props)=>{
    let a = props.kota
    return (
        <div>
            <h3>{a}</h3>
        </div>
    )
}

// class CounterScreen extends React.Component{
//     render(){
//         return(
//         <div>
//             <h3>{this.props.kota}</h3>
//         </div>
//         )
//     }
// }
export default CounterScreen