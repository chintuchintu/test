import React, { Component } from 'react';
import './styles.css'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      name: '',
      age: '',
      loc: ''
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(event) {
    this.setState({
      values: event.target.value,
    });

  }
  button() {
    let data = {
      command: this.state.values
    }
    console.log("request send", data);
    axios.post('http://localhost:5000/backend', data)
      .then(resp => {
        console.log("Response came", resp);
        this.setState({
          name: resp.data.Value.name,
          age: resp.data.Value.age,
          loc: resp.data.Value.loc,
        })
        //console.log("Response came",this.state.Name);
      })

  }
  render() {
    console.log("values are..", this.state.values);
    return (
      <center><div>
        <div className="App"><h2>personname</h2>
          <select id="name" onChange={this.handlechange}>
            <option value="default">personname</option>
            <option value="akhil">akhil</option>
            <option value="dinesh">dinesh</option>
            <option value="ashik">ashik</option>
          </select> &nbsp; 
          <button type="button" onClick={() => this.button()}>Submit</button>
        </div><br /><br />
        <div className="output">
          Name:{this.state.name}<br/>
          Age:{this.state.age}<br/>
          Loc:{this.state.loc}<br/>
        </div>
      </div></center>
    );
  }
}

export default App;
