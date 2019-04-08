import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ReviewFeedback.css';
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const styles = {
    card: {
      minWidth: 275,
      width: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class ReviewFeedback extends Component {

    showSubmitButton = () => {
        let feedback = this.props.reduxState.feedbackReducer;
        // conditionally render button based on whether feedback has been completed
        if( feedback.comments !== '' ){
            return <button onClick={this.handleSubmit}>Submit Feedback</button>;
        } else {
            return <button>Incomplete</button>;
        }
    } 

    handleSubmit = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        // sending data to axios post on App.js
        this.props.submitFeedback( feedback );
        // head to thank you page!
        this.props.history.push( '/success' );
    }


    render() {
        return(
            <Card className="card">
                <div>
                    <h2>Review Your Feedback</h2>
                    
                    <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                    <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                    <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                    <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

                    {this.showSubmitButton()}

                </div>

            </Card>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(withStyles(styles)(ReviewFeedback)));