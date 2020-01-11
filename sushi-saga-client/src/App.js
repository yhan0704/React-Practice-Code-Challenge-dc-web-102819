import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      sushis:[]
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis:data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App;