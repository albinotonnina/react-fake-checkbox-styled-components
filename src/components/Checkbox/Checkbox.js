import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

class Checkbox extends Component {
  constructor(props) {
    super(props)
    const { checked } = props

    this.state = {
      checked: checked
    }
  }

  onClick = () => {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onChange({ checked: this.state.checked })
    })
  }

  render() {
    const { id, label } = this.props
    const { checked } = this.state

    return (
      <div onClick={this.onClick}>
        <span id={id} className="checkbox">
          {checked ? 'checked' : 'not checked'}
        </span>

        <Label className="label" htmlFor={id}>
          {label}
        </Label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {}
}

export default Checkbox
