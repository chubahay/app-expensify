console.log('app.js is running')


//JSX Javascript XML


const app = {
    title: 'Die Hard 3',
    subtitle: 'No idea what this is',
    options: []
}


const onformSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const options =  app.options[randomNum]
    alert(options)
}

const appRoot = document.getElementById('app')


const renderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : ''}
            {app.subtitle && <p>This is a new p tag</p>}
            {/* {returnOptions(app.options)} */}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled = {app.options.length === 0}onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {app.options.map((options) => {
                    return <li key = {options}>{options}</li>
                })}
            </ol>
            <form onSubmit={onformSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

ReactDOM.render(template, appRoot);

}


renderApp();


