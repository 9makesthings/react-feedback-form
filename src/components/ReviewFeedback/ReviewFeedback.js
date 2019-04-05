import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    render() {
        return(
            <div>
                <h2>Review!</h2>
            </div>
        );
    }
}

export default connect()(ReviewFeedback);