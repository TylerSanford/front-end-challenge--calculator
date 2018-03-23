import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// example import
// import { Button } from 'reactstrap';


class App extends Component {
  constructor() {
    super();

    this.state = { 
        value1: 0,
        value2: 0,
        opperator: ""
    };
}


  add(adder) {
    this.setState({opperator: "+"});
    let curr = this.state.value1;
    
  }

  subtract(minus) {
    let curr = this.state.value1;
    let next = curr - minus;
    this.setState({value1: next});
  }

  clear() {
    this.setState({value1: 0});
  }

  setVal(val) {
    let opp = this.state.opperator;
    
    function oppCheck(o) {
      if (o === "") return ["value1", "this.state.value1"]
      if (o === "+") return ["value2", "this.state.value2"];
    }

    let stateValue = oppCheck(opp)[0];
    let stateName = oppCheck(opp)[1];

    // if stateValue === value1 then do loop below


    if (eval(stateName) === 0) {
      this.setState({value1: val});
    } else { 
      let newVal = this.state.value1.toString().split();
      newVal.push(val + '');
      newVal = newVal.join('');
      this.setState({value1: parseInt(newVal)});
    }
  }

  
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
          <h1>{this.state.value1}</h1>
          
          <table class="calc-table">
            <tr>
              <td><button onClick={() => this.setVal(1)}>1</button></td>
              <td><button onClick={() => this.setVal(2)}>2</button></td>
              <td><button onClick={() => this.setVal(3)}>3</button></td>
              <td><button onClick={() => this.clear()}>AC</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.setVal(4)}>4</button></td>
              <td><button onClick={() => this.setVal(5)}>5</button></td>
              <td><button onClick={() => this.setVal(6)}>6</button></td>
              <td><button onClick={() => this.add(3)}>Add +</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.setVal(7)}>7</button></td>
              <td><button onClick={() => this.setVal(8)}>8</button></td>
              <td><button onClick={() => this.setVal(9)}>9</button></td>
              <td><button onClick={() => this.subtract(1)}>Minus -</button></td>
            </tr>
            <tr>
              <td>=</td>
            </tr>
          </table>

      
      </div>
    );
  }
}

export default App;
