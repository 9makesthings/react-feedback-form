import React, {Component} from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, event.target.value );
        
        this.setState({
            ...this.state,
            comments: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        
        const action = { type: 'ADD_COMMENTS', payload: this.state.comments };
        this.props.dispatch( action );

        this.props.history.push( '/' );
    }

    render() {
        return(
            <div>
                <h2>Comments!</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            onChange={this.handleChange} />
                    <button type="submit">Next</button>
                </form>
            </div>
        );
    }
}

export default connect()(Comments);