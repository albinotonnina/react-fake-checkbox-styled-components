import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    const { checked } = props

    this.state = {
      checked: checked
    }
  }

  onClick = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { id, label } = this.props
    const { checked } = this.state

    return (
      <div onClick={this.onClick}>
        <span id={id} className="checkbox">
          {checked ? 'checked' : 'not checked'}
        </span>

        <label className="label" htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
