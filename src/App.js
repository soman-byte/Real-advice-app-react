import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       advice:''
    }
  }

  componentDidMount(){
    this.fetchData()
  }


  fetchData = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((Response)=>{
      const {advice} = Response.data.slip
      this.setState({advice})
    })
    .catch((error)=>{
      <h1>error</h1>
    })
  }
  

  render(){
    return(
      <div className='App'>
        <div className='mid'>
            <h2>{this.state.advice}</h2>
            <button onClick={()=>this.fetchData()}>GIVE ME ADVICE</button>
        </div>
      </div>
    );
  }
}

export default App;
