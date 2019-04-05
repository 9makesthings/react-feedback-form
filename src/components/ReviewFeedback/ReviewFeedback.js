import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {



    render() {
        return(
            <div>
                <h2>Review Your Feedback</h2>
                
                <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(ReviewFeedback);