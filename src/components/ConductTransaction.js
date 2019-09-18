import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import history from '../history';
class ConductTransaction extends Component {
    state= {
        recipient:'',
        amount:0
    };
    updateValue=({target:{value,name}})=>{
        this.setState({[name]:value});
    };
    conductTransaction = async () => {
        const {recipient, amount} = this.state;
        const {data} = await axios.post('http://localhost:3001/api/transact', {
            recipient,
            amount
        });
        history.push('/transaction-pool')

    }
    render() {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h3>Conduct a Transaction</h3>
                <form onSubmit={(e)=>{e.preventDefault(); this.conductTransaction()}}>
                    <input type="text" value={this.state.recipient} placeholder={'recipient'} onChange={this.updateValue} name={'recipient'}/>
                    <input type="text" value={this.state.amount} placeholder={'amount'} name={'amount'} onChange={this.updateValue}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default ConductTransaction;