//HIGHT ORDER COMPONENT (HOC)  - A component that renders another component


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Thie info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
 return (props) => (
    <div>
        {props.isAdmin && <p>This is private info. Please dont share!</p>}
        <WrappedComponent {...props}/>
    </div>
 )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
       <div>
           {!props.isAuthenticated && <p>Please log in to see this information</p>}
           <WrappedComponent {...props}/>
       </div>
    )
   }

// require authentication



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details'/>, document.getElementById('app'));