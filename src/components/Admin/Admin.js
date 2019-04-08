import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    

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
                                        <button>X</button>
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