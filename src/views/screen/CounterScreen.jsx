import React from "react"

// const CounterScreen = (props)=>{
//     let a = props.kota
//     return (
//         <div>
//             <h3>{a}</h3>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0,
        namaku: "Lukman"
    }
    render() {
    const{counter1,counter2,counter3}= this.state
        return (
            <div>
                <div className="row">
                    <h1 className="col 4">
                        Counter1 = {counter1}
                        <br/>
                        <input
                        className="btn btn-primary"
                        type="button"
                        value="-"
                        onClick={() => this.setState({ counter1:counter1 - 1 })} />
                <input
                        className="btn btn-primary"
                        type="button"
                        value="+"
                        onClick={() => this.setState({ counter1:counter1 +1 })} />

                    </h1>
                    <h2 className="col 4">
                        Counter2 = {counter2}
                        <br/>
                        <input
                        className="btn btn-primary"
                        type="button"
                        value="-"
                        onClick={() => this.setState({ counter2:counter2 - 1 })} />
                <input
                        className="btn btn-primary"
                        type="button"
                        value="+"
                        onClick={() => this.setState({ counter2:counter2 +1 })} />
                    </h2>
                    <h3 className="col 4">
                        Counter3 = {counter3}
                        <br/>
                        <input
                        className="btn btn-primary"
                        type="button"
                        value="-"
                        onClick={() => this.setState({ counter3:counter3 - 1 })} />
                <input
                        className="btn btn-primary"
                        type="button"
                        value="+"
                        onClick={() => this.setState({ counter3:counter3 +1 })} />
                    </h3>
                </div>
                <h4>All Counter</h4>
                <input
                        className="btn btn-primary"
                        type="button"
                        value="-"
                        onClick={() => this.setState({ counter1:counter1 - 1,counter2:counter2 - 1,counter3:counter3 - 1 })} />
                <input
                        className="btn btn-primary"
                        type="button"
                        value="+"
                        onClick={() => this.setState({ counter1:counter1 +1,counter2:counter2 +1,counter3:counter3 +1 })} />
                <br/><br/>
                <input 
                className="btn btn-danger"
                type="button" 
                value="Reset"
                onClick={()=> this.setState({counter1:0,counter2:0,counter3:0})}/>
            </div>
        )
    }
}
export default CounterScreen