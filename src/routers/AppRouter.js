import React from 'react';
import { Router, Route, Switch, NavLink} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage';
import Privateroute from './PrivateRoute'
import Publicroute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Publicroute path="/" component={LoginPage} exact={true}/> 
            <Privateroute path="/dashboard" component={ExpenseDashboardPage}/> 
            <Privateroute path="/create" component={AddExpensePage}/> 
            <Privateroute path="/edit/:id" component={EditExpensePage}/> 
            <Route component={NotFoundPage}/> 
        </Switch>
    </div>    
    </Router>
)

export default AppRouter;
