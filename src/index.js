import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
   state={lat:null,err:''}
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({err:err.message})
        )
    }
    renders() {
      
        if (this.state.err && !this.state.lat) {
            return   <h1>Error {this.state.err }</h1>  
        }
        if (!this.state.err && this.state.lat) {
            return <SeasonDisplay  lat={this.state.lat }/>
        }
    
         return <Loader/>
    
 }
    render() {
        return <div style={{border:'3px solid black'}}>{this.renders()}</div>
    }
   
}

ReactDOM.render(<App/>,document.querySelector('#root'))



