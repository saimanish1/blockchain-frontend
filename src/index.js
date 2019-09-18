import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path={'/'} component={App} exact={true}/>
            <Route path={'/blocks'} component={Blocks}/>
            <Route path={'/conduct-transaction'} component={ConductTransaction}/>
            <Route path={'/transaction-pool'} component={TransactionPool}/>
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
