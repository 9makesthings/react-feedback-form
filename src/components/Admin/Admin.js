import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    

    render() {
        return(
            <div>
                <h2>Admin stuff</h2>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(Admin);