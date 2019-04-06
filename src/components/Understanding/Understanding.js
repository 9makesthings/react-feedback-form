import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, this.state );
        
        this.setState({
            ...this.state,
            understanding: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        

        if( this.state.understanding !== '' ){
            const action = { type: 'ADD_UNDERSTANDING', payload: this.state.understanding };
            this.props.dispatch( action );

            this.props.history.push( '/support' );
        }else {
            alert( `Please select a number between 1 and 5.`);
        }
    }


    render() {
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="number" name="understanding"
                            min="1" max="5"
                            onChange={this.handleChange} />

                    <button type="submit">Next</button>
                </form>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(Understanding);