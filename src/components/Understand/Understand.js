import React, {Component} from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    render() {
        return(
            <div>
                <h2>Understanding!</h2>
            </div>
        );
    }
}

export default connect()(Understanding);