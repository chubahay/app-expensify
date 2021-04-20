// console.log('the app is running')


// const appRoot = document.getElementById('app')

// let state = "hidden" //wording hidden to start with

// const toggle = () => {
//     state === "hidden" ? state = 'visible' : state = 'hidden'; //if its hidden, change it to visible (function only triggered onClick of button)
//     renderApp()
// }

// const renderApp = () => {

//     const template = (
//         <div>
//             <h1>Visibility Options</h1>
//             <button onClick = {toggle}>{state === "hidden" ? 'Show Options' : 'Hide Options'}</button> 
//             <p>{state === 'visible' ? 'eat my ass' : ''}</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// //ternary operator to show / hide options and text.

// renderApp()




class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };

    }

    toggleVisibility() {
        
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    
    }
    render(){
        return (
            <div>
                <h1>Visibility Options</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility === false ? 'Show Details' : 'Hide Details'}</button>
                <p>{this.state.visibility === true ? 'Eat my ass' : ''}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));