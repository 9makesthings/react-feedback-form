import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, this.state );
        
        this.setState({
            ...this.state,
            feeling: event.target.value,
        })
    }

    render() {
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="number" name="feeling"
                            min="1" max="5"
                            onChange={this.handleChange} />

                    <button type="submit">Next</button>
                </form>
            </div>
        );
    }
}

export default connect()(Feeling);