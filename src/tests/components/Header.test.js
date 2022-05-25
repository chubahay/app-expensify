import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test('Should render the header component correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render the LogoutPage', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled();
})