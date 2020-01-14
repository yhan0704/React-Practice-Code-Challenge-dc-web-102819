import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      sushis:[],
      budget: 150,
      sushiIndex:0,
      eaten:[]
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

  addMoreHandle=()=>{
    this.setState({
      sushiIndex : this.state.sushiIndex + 4
    })
  }

  sushiOnplate=()=>{
    let sushiArray = [...this.state.sushis]
    return sushiArray.slice(this.state.sushiIndex, this.state.sushiIndex+4)
  }

  onClickPlate=(plateObj)=>{
    let priceChange = this.state.budget - plateObj.sushi.price
    let NewSushi = [...this.state.eaten]
    let remove = this.state.sushis.map(sushi => {
      if(sushi.id === plateObj.sushi.id && !sushi.isPlate){
        sushi.isPlate = true
        NewSushi.push(sushi)
      }
      return sushi
    })
    

    this.setState({
      budget : priceChange,
      sushis : remove,
      eaten : NewSushi
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushiOnplate={this.sushiOnplate()}
        removeSushi={this.state.eaten}
        addMoreHandle={this.addMoreHandle} 
        onClickPlate={this.onClickPlate}/>

        <Table budget={this.state.budget} 
        eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;