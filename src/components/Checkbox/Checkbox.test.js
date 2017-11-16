import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

it('renders not checked by default', () => {
  const wrapper = shallow(<Checkbox />)

  expect(wrapper.find('.checkbox').text()).toEqual('not checked')
})

it('renders not checked by default', () => {
  const wrapper = shallow(<Checkbox checked={true} />)

  expect(wrapper.find('.checkbox').text()).toEqual('checked')
})

it('renders an empty label by default', () => {
  const wrapper = shallow(<Checkbox />)

  expect(wrapper.find('.label').text()).toEqual('')
})

it('renders a label', () => {
  const wrapper = shallow(<Checkbox label="some label" />)

  expect(wrapper.find('.label').text()).toEqual('some label')
})

it('has a click event', () => {
  const wrapper = shallow(<Checkbox />)
  expect(wrapper.find('.checkbox').text()).toEqual('not checked')
  wrapper.simulate('click')
  expect(wrapper.find('.checkbox').text()).toEqual('checked')
})

it('has a click event, surely', () => {
  const wrapper = shallow(<Checkbox checked={true} />)
  expect(wrapper.find('.checkbox').text()).toEqual('checked')
  wrapper.simulate('click')
  expect(wrapper.find('.checkbox').text()).toEqual('not checked')
  wrapper.simulate('click')
  expect(wrapper.find('.checkbox').text()).toEqual('checked')
})
