import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: 10,
      width: 600,
    },
    button: {
      margin: 10,
    },
  });

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
        const {classes} = this.props;

        return(
            <div>
                <Card className="card">
                    <h2>Leave a comment</h2>

                    <form onSubmit={this.handleSubmit}>
                        <TextField multiline variant="outlined"
                                rows="4"
                                className={classes.textField} type="text" 
                                onChange={this.handleChange} />
                        <br/><br/>
                        <Button size="medium" variant="contained" color="primary" type="submit">Submit Comments</Button>
                        <br/>
                    </form>

                </Card>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(Comments));