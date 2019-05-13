import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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

class Feeling extends Component {

    state = {
        feeling: 0
    }
    
    handleChange = event => {
    this.setState({ feeling: event.target.value });
    };

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
        const {classes} = this.props;

        return(
            <div>
                <Card className="card">
                    <h2>How are you feeling today?</h2>
                    <form onSubmit={this.handleSubmit} >
                        
                        <div className="scale" >
                            <i className="material-icons large" >sentiment_very_dissatisfied</i>

                            <div className="radio" >
                                <Radio
                                checked={this.state.feeling === '1'}
                                onChange={this.handleChange}
                                value="1"
                                aria-label="1"
                                />
                                <Radio
                                checked={this.state.feeling === '2' }
                                onChange={this.handleChange}
                                value="2"
                                aria-label="2"
                                />
                                <Radio
                                checked={this.state.feeling === '3'}
                                onChange={this.handleChange}
                                value="3"
                                aria-label="3"
                                />
                                <Radio
                                checked={this.state.feeling === '4'}
                                onChange={this.handleChange}
                                value="4"
                                aria-label="4"
                                />
                                <Radio
                                checked={this.state.feeling === '5'}
                                onChange={this.handleChange}
                                value="5"
                                aria-label="5"
                                // icon={<RadioButtonUncheckedIcon fontSize="small" />}
                                // checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                                />
                            </div>

                            <i className="material-icons large" >sentiment_very_satisfied</i>
                        </div>

                        <br/>

                        <Button className={classes.button} size="medium" variant="contained" color="primary" type="submit">Next</Button>
                        <br/>
                    </form>
                </Card>

                <Icon>arrow</Icon>   

                <br/>
                 <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(Feeling));