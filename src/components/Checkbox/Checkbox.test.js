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

it('has an onChange callback', () => {
  const mockCallback = jest.fn()

  const wrapper = shallow(<Checkbox onChange={mockCallback} />)

  wrapper.simulate('click')
  wrapper.simulate('click')

  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback.mock.calls[0][0].checked).toBeTruthy()
  expect(mockCallback.mock.calls[1][0].checked).toBeFalsy()
})

it('has an onChange callback', () => {
  const mockCallback = jest.fn()

  const wrapper = shallow(<Checkbox checked={true} onChange={mockCallback} />)

  wrapper.simulate('click')
  wrapper.simulate('click')

  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback.mock.calls[1][0].checked).toBeTruthy()
  expect(mockCallback.mock.calls[0][0].checked).toBeFalsy()
})
