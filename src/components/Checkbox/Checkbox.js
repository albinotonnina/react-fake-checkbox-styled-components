import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  render() {
    const { checked } = this.props
    return <div className="checkbox">{checked ? 'checked' : 'not checked'}</div>
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
