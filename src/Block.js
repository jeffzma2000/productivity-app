import React from 'react';
import { FormControl, Checkbox, TextField, Grid, Hidden } from '@material-ui/core';

class Block extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', done : false};

        this.handleChange = this.handleChange.bind(this)
        this.checkChange = this.checkChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch(`/get-tasks/${this.props.name}/${this.props.index}`).then(res => res.json()).then(
            (result) => {
                this.setState({
                    value: result.tasks,
                    done: result.done
                })
            }
        )
    }
    
    checkChange(event) {
        if (this.state.done) {
            this.setState({done: false})
        } else {
            this.setState({done: true})
        }
        fetch(`/check/${this.props.name}/${this.props.index}/${!this.state.done}`)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch(`/submit/${this.props.name}/${this.props.index}/${this.state.value}`).then(res => res.json().then(
            (result) => {
                this.setState({
                    value: result.tasks,
                    done: result.done
                })
            }
        ))
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid item container xs={12} justify='center'>
                    <Hidden xlDown={this.props.check}>
                        <Grid item xs={3}>
                            {this.state.value == '' ? <Checkbox onChange={this.checkChange} checked={this.state.done} disabled></Checkbox> : <Checkbox onChange={this.checkChange} checked={this.state.done}></Checkbox>}
                        </Grid>
                    </Hidden>
                    <Grid item xs={9}>
                        <TextField type="text" value={this.state.value} name="desc" label={this.props.label} onChange={this.handleChange}/>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default Block;