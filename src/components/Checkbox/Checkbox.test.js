import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

it('renders not checked by default', () => {
  const wrapper = shallow(<Checkbox />)

  expect(wrapper.find('.checkbox').text()).toEqual('not checked')
})
