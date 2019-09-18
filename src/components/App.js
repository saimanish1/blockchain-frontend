import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


class App extends Component {
    state= {
        walletInfo: {
            address:'fooxv6',
            balance:999
        }
    };

    async componentDidMount() {
        const response = await axios('http://localhost:3001/api/wallet-info');
        console.log(response);
        this.setState({walletInfo:response.data});
    }


    render() {
        const {walletInfo:{address,balance}}=this.state;
        return (
            <div className="App">
                <div><Link to={"/blocks"}>Blocks</Link></div>
                <div><Link to={"/conduct-transaction"}>Conduct Transaction</Link></div>
                <div><Link to={"/transaction-pool"}>Transaction Pool</Link></div>
                <div>Address: {address}</div>
                <div>Balance: {balance}</div>
                <br/>
            </div>
        );
    }
}

export default App;
