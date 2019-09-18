import React, {Component} from 'react';
import Transaction from "./Transaction";

class Block extends Component {
    state= {
        displayTransaction:false
    };
    toggleTransaction = ()=>{
      this.setState({displayTransaction:!this.state.displayTransaction});
    };
    displayTransaction() {
        const {data}=this.props.block;

        const stringifiedData = JSON.stringify(data);
        const dataDisplay = stringifiedData.length>35?`${stringifiedData.substring(0,5)}...`:stringifiedData;
        if(this.state.displayTransaction){
            return (<div>
                <div>{
                    data.map(transaction=> <div key={transaction.id}>
                        <hr/> <Transaction transaction={transaction}/></div>)
                }</div>
                <button onClick={this.toggleTransaction}>show less></button>

            </div>)
        }
        return <div>
            <div>Data: {dataDisplay}</div>
            <button onClick={this.toggleTransaction}>show more</button>
        </div>
    }
    render() {
        const {timestamp,hash}=this.props.block;
        const hashDisplay = `${hash.substring(0,15)}...`;


        return (
            <div>
                <div>Hash: {hashDisplay}</div>
            <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
                {this.displayTransaction()}
            </div>
        );
    }
}

export default Block;