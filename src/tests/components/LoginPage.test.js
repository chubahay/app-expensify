import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('Should render the LoginPage component correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />)
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render the LoginPage', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled();
})