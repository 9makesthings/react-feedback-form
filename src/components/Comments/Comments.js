import React, {Component} from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, event.target.value );
        
    }

    render() {
        return(
            <div>
                <h2>Comments!</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default connect()(Comments);