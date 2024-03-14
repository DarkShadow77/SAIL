
import { Component } from 'react'
import './App.css'

class App extends Component{

  state = {
    name: "David",
    position: "Software Engineer"
  };

  next = ()=>{
    console.log("message")
    this.setState({
      age: 22,
      position: "Flutter Developer"
    });
  }

  previous = ()=> {
    this.setState({
    position: "Software Engineer"
    });
  }

  render(){

    return(
      <>
        <p>My name is {this.state.name}, I am a {this.state.position} My age is {this.state.age}</p>
        <button onClick={this.previous}>{"<"}</button><button onClick={this.next}>{">"}</button>
      </>
    )
  }
}

export default App
