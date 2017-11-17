import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkbox from './Checkbox'

it('renders not checked by default', () => {
  const wrapper = shallow(<Checkbox />)

  expect(wrapper.state('checked')).toBeFalsy()
})

it('renders checked', () => {
  const wrapper = shallow(<Checkbox checked={true} />)

  expect(wrapper.state('checked')).toBeTruthy()
})

it('renders an empty label by default', () => {
  const wrapper = shallow(<Checkbox />)

  expect(
    wrapper
      .find('Label')
      .childAt(0)
      .text()
  ).toEqual('')
})

it('renders a label', () => {
  const wrapper = shallow(<Checkbox label="some label" />)

  expect(
    wrapper
      .find('Label')
      .childAt(0)
      .text()
  ).toEqual('some label')
})

it('has a click event', () => {
  const wrapper = shallow(<Checkbox />)
  expect(wrapper.state('checked')).toBeFalsy()
  wrapper.simulate('click')
  expect(wrapper.state('checked')).toBeTruthy()
})

it('has a click event, surely', () => {
  const wrapper = shallow(<Checkbox checked={true} />)
  expect(wrapper.state('checked')).toBeTruthy()
  wrapper.simulate('click')
  expect(wrapper.state('checked')).toBeFalsy()
  wrapper.simulate('click')
  expect(wrapper.state('checked')).toBeTruthy()
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
