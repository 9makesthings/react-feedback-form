import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    deleteFeedback = (event) => {
        console.log( `in deleteFeedback...` );

        // TODO!!! Validate before deleting feedback.
        // TODO!!! Refresh GET request after deleting
        
        let id = event.target.value;
        console.log( `id:`, id );
        
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then( (response) => {
            console.log( `Deleted feedback item! Yay!` );
            // need to re-get all feedback!
        })
        .catch( (error) => {
            console.log( `Could not delete feedback.`, error );
            alert( `Sorry, could not delete feedback. Try again later.` );
        })
    }
    

    render() {
        return(
            <div>
                <h2>Admin stuff</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.reduxState.storeFeedbackReducer.map( feedback => 
                                <tr key={feedback.id}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td>
                                        <button onClick={this.deleteFeedback} value={feedback.id}>X</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(Admin);