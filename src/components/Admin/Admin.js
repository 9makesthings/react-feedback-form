import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {

    deleteFeedback = (event) => {
        console.log( `in deleteFeedback...` );

        // TODO!!! Validate before deleting feedback.
        
        let id = event.target.value;
        console.log( `id:`, id );
        
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then( (response) => {
            console.log( `Deleted feedback item! Yay!` );
            this.props.getFeedback();
        })
        .catch( (error) => {
            console.log( `Could not delete feedback.`, error );
            alert( `Sorry, could not delete feedback. Try again later.` );
        })
    }
    

    render() {
        return(
            <div>
                <Card className="card" >
                    <h2>Admin stuff</h2>

                    <Table className="adminTable" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Comprehension</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.props.reduxState.storeFeedbackReducer.map( feedback => 
                                    <TableRow key={feedback.id}>
                                        <TableCell>{feedback.feeling}</TableCell>
                                        <TableCell>{feedback.understanding}</TableCell>
                                        <TableCell>{feedback.support}</TableCell>
                                        <TableCell>{feedback.comments}</TableCell>
                                        <TableCell>
                                            <Button size="small" variant="contained" color="secondary"
                                                    onClick={this.deleteFeedback} value={feedback.id}>X</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(Admin);