import React from "react";
class Timer extends React.Component{
    state = { time: '' };
    componentDidMount() {
        setInterval(() => {
           this.setState({time:new Date().toLocaleTimeString()}) 
        },1000)
    };
    render() {
        return <h1>--{this.state.time }</h1>
    };
};
export default Timer;