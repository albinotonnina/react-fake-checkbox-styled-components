import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Checkbox from './components/Checkbox'

class App extends Component {
  constructor() {
    super()

    this.state = {
      checks: []
    }
  }

  onChange = checkbox => {
    const ischecked = checkbox.checked
    this.setState({
      checks: [...this.state.checks, ischecked]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fake checkbox component</h1>
        </header>
        <div>
          <Checkbox label="Hello!" onChange={this.onChange} />
        </div>

        <ul>
          {this.state.checks.map((check, index) => {
            return <li key={index}>{check ? 'checked' : 'not checked'}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
