import React, {Component} from 'react';
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Success extends Component {

    handleClick = () => {
        console.log( `in handleClick...` );
        this.props.history.push( '/' );
    }

    render() {
        return(
            <div>
                <Card className="card" >
                    <h2>Thank You!</h2>

                    <Button size="small" variant="contained" color="primary" 
                            onClick={this.handleClick}>Leave New Feedback</Button>
                </Card>
            </div>
        );
    }
}

export default withStyles()(Success);