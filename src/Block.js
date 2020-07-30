import React from 'react';
import Input from '@material-ui/core/Input'

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
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }
    
}

export default Block;