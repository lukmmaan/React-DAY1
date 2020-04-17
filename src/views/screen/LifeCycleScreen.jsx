import React from "react"

class LifeCycleScreen extends React.Component{
    state={
        username: '',
        time:new Date(),
    }
    componentDidMount(){
        // alert("halo")
        this.timer= setInterval(()=>this.jam(),1000)
    }//keluar setelah render
    componentDidUpdate(){
        // alert("unmount")
    }//keluar setelah update
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    jam =()=>{
        this.setState({time: new Date()})
    }
    render() {
        return (
            <div>
                <h1>LifeCycleScreen</h1>
                <h4>{this.state.time.toLocaleTimeString()}</h4>
            </div>
        )
    }
}
export default LifeCycleScreen