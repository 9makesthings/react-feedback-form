import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    render() {
        return(
            <div>
                <h2>Feelings!</h2>
            </div>
        );
    }
}

export default connect()(Feeling);