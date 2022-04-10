import React, { useState} from "react";
// class Timer extends React.Component{
//     state = { time: new Date().toLocaleTimeString()};
//     componentDidMount() {
//         setInterval(() => {
//            this.setState({time:new Date().toLocaleTimeString()})
//         },1000)
//     };
//     render() {
//         return <h1>{this.state.time }</h1>
//     };
// };

const Timer = () => {
    const time = new Date().toLocaleTimeString();
    const [timer, setTime] = useState(time)
       setInterval(() => {
              setTime(new Date().toLocaleTimeString())
           },1000)
    return <h1>{time}</h1>
}
export default Timer;