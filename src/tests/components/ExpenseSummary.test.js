import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('Should render the ExpenseSummary component correctly with no visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={0} expensesTotal={0}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should render the correct total number of expenses and total amount of expenses with one visible expense', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={1} expensesTotal={200}/>)
    expect(wrapper).toMatchSnapshot();  
})

test('Should render the correct total number of expenses and total amount of expenses with two visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={2} expensesTotal={400059}/>)
    expect(wrapper).toMatchSnapshot();  
})
