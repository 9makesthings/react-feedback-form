import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App/App.css';
// Material UI imports
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class ReviewFeedback extends Component {

    showSubmitButton = () => {
        let feedback = this.props.reduxState.feedbackReducer;
        // conditionally render button based on whether feedback has been completed
        if( feedback.comments !== '' ){
            return <Button size="small" variant="contained" color="primary" 
                    onClick={this.handleSubmit}>Submit Feedback</Button>;
        } else {
            return <Button size="small" variant="contained" 
                    color="default" disabled >Incomplete</Button>;
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
                    
                    <Table className="reviewTable">
                        <TableBody>
                            <TableRow>
                                <TableCell>Feeling</TableCell> 
                                <TableCell>{this.props.reduxState.feedbackReducer.feeling}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Understanding</TableCell> 
                                <TableCell>{this.props.reduxState.feedbackReducer.understanding}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Support</TableCell>
                                <TableCell>{this.props.reduxState.feedbackReducer.support}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Comments</TableCell>
                                <TableCell>{this.props.reduxState.feedbackReducer.comments}</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>

                    <br/>

                    {this.showSubmitButton()}

                </div>

            </Card>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(ReviewFeedback));