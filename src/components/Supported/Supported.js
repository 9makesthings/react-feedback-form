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

class Supported extends Component {

    state = {
        supported: 0
    }

    handleChange = event => {
        this.setState({ supported: event.target.value });
        };

    handleSubmit = () => {
        console.log( `in handleSubmit...` );

        // keeping user from moving forward without input values
        if( this.state.supported !== '' ){
            const action = { type: 'ADD_SUPPORT', payload: this.state.supported };
            this.props.dispatch( action );

            this.props.history.push( '/comments' );
        } else {
            alert( `Please select a number between 1 and 5.`);
        }
    }

    render() {
        const {classes} = this.props;

        return(
            <div>
                <Card className="card" >
                    <h2>How well are you being supported?</h2>
                    <form onSubmit={this.handleSubmit} >
                        
                        <div className="scale" >
                            <i className="material-icons large" >person_outline</i>

                            <div className="radio" >
                                <Radio
                                checked={this.state.supported === '1'}
                                onChange={this.handleChange}
                                value="1"
                                aria-label="1"
                                />
                                <Radio
                                checked={this.state.supported === '2' }
                                onChange={this.handleChange}
                                value="2"
                                aria-label="2"
                                />
                                <Radio
                                checked={this.state.supported === '3'}
                                onChange={this.handleChange}
                                value="3"
                                aria-label="3"
                                />
                                <Radio
                                checked={this.state.supported === '4'}
                                onChange={this.handleChange}
                                value="4"
                                aria-label="4"
                                />
                                <Radio
                                checked={this.state.supported === '5'}
                                onChange={this.handleChange}
                                value="5"
                                aria-label="5"
                                />
                            </div>

                            <i className="material-icons large" >people</i>
                        </div>

                        <br/>

                        <Button className={classes.button} size="medium" variant="contained" color="primary" type="submit">Next</Button>
                    </form>
                </Card>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(Supported));