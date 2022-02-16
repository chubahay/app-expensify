import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('Should render the ExpenseSummary component correctly with no visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary />)
    expect(wrapper).toMatchSnapshot();
})

test('Should render the correct total number or expenses and total amount of expenses with one visible expense', () => {
    const wrapper = shallow(<ExpenseSummary />)
})

test('Should render the correct total number or expenses and total amount of expenses with two visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary />)
})
