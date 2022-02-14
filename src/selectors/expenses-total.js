
export default (expenses) => {

    const initialValue = 0

    return expenses.map(({ amount }) => ({ amount })).reduce((previousValue, currentValue) => {
        return previousValue + currentValue.amount
    }, initialValue);

};
