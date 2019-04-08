import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import './Feeling.css';
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      margin: 10,
    },
    input: {
      display: 'none',
    },
  };

class Feeling extends Component {

    state = {
        feeling: 0
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, this.state );
        
        this.setState({
            ...this.state,
            feeling: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        

        if( this.state.feeling !== '' ){
            const action = { type: 'ADD_FEELING', payload: this.state.feeling };
            this.props.dispatch( action );

            this.props.history.push( '/understanding' );
        } else {
            alert( `Please select a number between 1 and 5.`);
        }
    }

    render() {
        return(
            <div>
                <Card className="card">
                    <h2>How are you feeling today?</h2>
                    <form onSubmit={this.handleSubmit} >
                        <input type="number" name="feeling"
                                min="1" max="5"
                                onChange={this.handleChange} />

                        <Button size="small" variant="contained" color="primary" type="submit">Next</Button>
                        <br/>
                    </form>
                </Card>

                <br/>
                 <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(Feeling));