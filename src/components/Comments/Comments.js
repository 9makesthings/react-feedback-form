import React, {Component} from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    render() {
        return(
            <div>
                <h2>Comments!</h2>
            </div>
        );
    }
}

export default connect()(Comments);