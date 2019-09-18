import React, {Component} from 'react';
import axios from "axios";
import Blocks from "./Blocks";


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
                <div>Address: {address}</div>
                <div>Balance: {balance}</div>
                <br/>
                <Blocks/>
            </div>
        );
    }
}

export default App;
