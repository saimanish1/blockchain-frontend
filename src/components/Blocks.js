import React, {Component} from 'react';
import * as axios from "axios";
import Block from "./Block";
import {Link} from "react-router-dom";

class Blocks extends Component {
    state={
      blocks:[]  
    };

    async componentDidMount() {
        const {data} = await axios('http://localhost:3001/api/blocks');
        this.setState({blocks:data});
    }

    render() {

        return (
            <div>
                <h3>Blocks</h3>
                <div><Link to={"/"}>Home</Link></div>

                {
                    this.state.blocks.map(block=>  <Block key={block.hash} block={block}/>)

                }
            </div>
        );
    }
}

export default Blocks;