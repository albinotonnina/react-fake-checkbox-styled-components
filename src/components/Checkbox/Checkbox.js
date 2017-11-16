import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  render() {
    const { id, checked, label } = this.props

    return (
      <div>
        <span id={id} className="checkbox">{checked ? 'checked' : 'not checked'}</span>

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
