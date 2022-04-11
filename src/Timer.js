import React, { useState} from "react";
// class Timer extends React.Component{
//     state = { timer: new Date().toLocaleTimeString() }
//     componentDidMount() {
//         setInterval(() => {
//               this.setState({timer:new Date().toLocaleTimeString()})
//           },1000)
//       }
//     render() { return <h1>{this.state.timer}</h1>}
// }

const Timer = () => {
    const timer=new Date().toLocaleTimeString()
    const [timers, setTimres] = useState(timer)
    setInterval(()=>{setTimres(new Date().toLocaleTimeString())},1000)
    return <h1>{timers }</h1>
}

export default Timer;