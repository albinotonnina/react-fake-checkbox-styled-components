import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  checkbox_checked:
    'M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z',
  checkbox_unchecked:
    'M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z'
}

const Icon = ({ className, icon, style }) => (
  <svg width="16" height="16" viewBox="0 0 32 32" className={className} style={style}>
    <path d={icons[icon]} />
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}


export default Icon
