import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Transaction from "./Transaction";
import history from "../history";
const POLL_INTERVAL_MS = 10000;

class TransactionPool extends Component {
    state={
        transactionPoolMap:{}
    };
    fetchTransactionPoolMap = async () => {
        const {data} = await axios('http://localhost:3001/api/transaction-pool-map');
        this.setState({transactionPoolMap:data})
    }

    componentDidMount() {
        this.fetchTransactionPoolMap();
     this.fetchPoolMapInterval=   setInterval(()=>this.fetchTransactionPoolMap(),POLL_INTERVAL_MS);
    }

    componentWillUnmount() {
        clearInterval(this.fetchPoolMapInterval)
    }
    fetchMineTransactions = async () => {
        const {status} = await axios('http://localhost:3001/api/mine-transactions')
        if(status===200){
            alert('success');
            history.push('/blocks');
        }
        else {
            alert('error');
        }
    };
    render() {
        return (
            <div>
                <div><Link to={"/"}>Home</Link></div>
                <h3>Transaction Pool</h3>
                {Object.values(this.state.transactionPoolMap).map(trans=><div key={trans.id}>
                    <hr/>
                    <Transaction transaction={trans}/>
                </div>)}
                <hr/>
                <button onClick={this.fetchMineTransactions}> Mine the transactions</button>
            </div>
        );
    }
}

export default TransactionPool;