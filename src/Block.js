import React from 'react';
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import { formatMs } from '@material-ui/core';

class Block extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <form action={`http://localhost:3000/submit/${this.props.name}/${this.props.index}`} method="POST">
                <Input type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Block;