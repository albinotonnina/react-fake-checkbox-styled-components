import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-system'
import Icon from '../Icon'

const Container = styled.div`
  display: flex;
  user-select: none;
`

Container.displayName = 'Container';

const Label = styled.span`
  margin-left: ${theme('space.xs')};
  font-size: ${theme('fontSizes.md')};
`

Label.displayName = 'Label';

const Check = styled.div`
  width: ${theme('space.md')};
  height: ${theme('space.md')};
`

Check.displayName = 'Check';


const CheckIcon = styled(Icon)`
  width: ${theme('space.md')};
  height: ${theme('space.md')};

  fill: ${({ checked }) =>
    checked ? theme('colors.themePrimary') : theme('colors.neutralTertiary')};
`

CheckIcon.displayName = 'CheckIcon';

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
      <Container id={id} onClick={this.onClick}>
        <Check>
          <CheckIcon icon={checked ? 'checkbox_checked' : 'checkbox_unchecked'} checked={checked} />
        </Check>

        <Label className="label" htmlFor={id}>
          {label}
        </Label>
      </Container>
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
