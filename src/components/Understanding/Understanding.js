import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    button: {
      margin: theme.spacing.unit,
    },
  });

class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleChange = event => {
        this.setState({ understanding: event.target.value });
        };

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        

        if( this.state.understanding !== '' ){
            const action = { type: 'ADD_UNDERSTANDING', payload: this.state.understanding };
            this.props.dispatch( action );

            this.props.history.push( '/support' );
        }else {
            alert( `Please select a number between 1 and 5.`);
        }
    }


    render() {
        const {classes} = this.props;

        return(
            <div>
                <Card className="card" >
                    <h2>How well are you understanding the content?</h2>
                    <form onSubmit={this.handleSubmit} >
                        
                        <div className="scale" >
                            <i className="material-icons large" >help_outline</i>

                            <div className="radio" >
                                <Radio
                                checked={this.state.understanding === '1'}
                                onChange={this.handleChange}
                                value="1"
                                aria-label="1"
                                />
                                <Radio
                                checked={this.state.understanding === '2' }
                                onChange={this.handleChange}
                                value="2"
                                aria-label="2"
                                />
                                <Radio
                                checked={this.state.understanding === '3'}
                                onChange={this.handleChange}
                                value="3"
                                aria-label="3"
                                />
                                <Radio
                                checked={this.state.understanding === '4'}
                                onChange={this.handleChange}
                                value="4"
                                aria-label="4"
                                />
                                <Radio
                                checked={this.state.understanding === '5'}
                                onChange={this.handleChange}
                                value="5"
                                aria-label="5"
                                />
                            </div>

                            <i className="material-icons large" >school</i>
                        </div>

                        <br/>

                        <Button className={classes.button} size="medium" variant="contained" color="primary" type="submit">Next</Button>
                        <br/>
                    </form>
                </Card>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(Understanding));