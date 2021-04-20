// function square(x) {
//     return x * x;
// }

// console.log(square(8))

// // const squareArrow = (x) => {
// //     return x * x;
// // };


// const squareArrow = (x) => x * x


// console.log(squareArrow(9))



// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0]
// }

// const getFirstName = (fullName) => fullName.split(' ')[0]

// console.log(getFirstName('Charlie Rogers'))

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const resetButton = () => {
//     count = 0;
//     renderCounterApp();
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetButton}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot)
// };


// renderCounterApp();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleOne =  this.handleOne.bind(this);
        this.handleMinusOne =  this.handleMinusOne.bind(this);
        this.handlereset =  this.handlereset.bind(this);
        this.state = {
            Count: 0
        };
    };

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('Count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)){
                this.setState(() => ({ 'Count': count}));
            }
        } catch (e) {
            // do nothing at all
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.Count !== this.state.Count){
            localStorage.setItem('Count', this.state.Count)
        }
    }

    handleOne() {
        this.setState((prevState) => {
            return {
                Count: prevState.Count +1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                Count: prevState.Count -1
            };
        });
    }

    handlereset() {
        this.setState(() => {
            return {
                Count: 0
            };
        });
    }   

    render(){
        return (
            <div>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={this.handleOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handlereset}>Reset</button>
            </div>
        )
    }

}


ReactDOM.render(<Counter/>, document.getElementById('app'));


// function returnSubtitle(subtitle) {
//     if (subtitle){
//         return <p>{app.subtitle}</p><p>This is a new p tag</p>
//     }
// }


// function returnOptions (options){
//     if (options.length > 0){
//         return <p>Here are your options {options}</p>
//     } else {
//         return <p>No options</p>
//     }
// }


// const user = {
//     name: 'Charlie',
//     age: 30,
//     location: 'Edinburgh'
// };

// function getLocation(location) {
//  if (location) {
//      return <p>Location: {location}</p>
//  } 
// }


// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )
