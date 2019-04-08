import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


// const styles = {
//     card: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     button: {
//       margin: 10,
//     },
//     input: {
//       display: 'none',
//     },
//   };

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, event.target.value );
        
        this.setState({
            ...this.state,
            comments: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        
        const action = { type: 'ADD_COMMENTS', payload: this.state.comments };
        this.props.dispatch( action );

        this.props.history.push( '/review' );
    }

    render() {
        return(
            <div>
                <Card className="card">
                    <h2>Comments!</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                                onChange={this.handleChange} />
                        <Button size="small" variant="contained" color="primary" type="submit">Submit Comments</Button>
                        <br/>
                    </form>

                </Card>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(Comments);