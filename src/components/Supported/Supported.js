import React, {Component} from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    render() {
        return(
            <div>
                <h2>Support!</h2>
            </div>
        );
    }
}

export default connect()(Supported);