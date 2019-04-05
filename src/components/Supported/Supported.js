import React, {Component} from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    state = {
        supported: 0
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, this.state );
        
        this.setState({
            ...this.state,
            support: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        
        const action = { type: 'ADD_SUPPORT', payload: this.state.support };
        this.props.dispatch( action );

        this.props.history.push( '/comments' );
    }

    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="number" name="support"
                            min="1" max="5"
                            onChange={this.handleChange} />

                    <button type="submit">Next</button>
                </form>
            </div>
        );
    }
}

export default connect()(Supported);