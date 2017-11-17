import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import Checkbox from './components/Checkbox'

const Container = styled.div`
  color: ${theme('colors.neutralPrimary')};
  padding: ${theme('space.md')};
`

const Ul = styled.ul`
  display: flex;
  padding: 0;
`

const Li = styled.li`
  list-style-type: none;
`

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
      <Container>
        <header>
          <h1>React label + checkbox</h1>
        </header>
        <div>
          <Checkbox label="Hello!" onChange={this.onChange} />
        </div>

        <Ul>
          {this.state.checks.map((check, index) => {
            return <Li key={index}>{check ? 'X' : 'O'}</Li>
          })}
        </Ul>
      </Container>
    )
  }
}

export default App
