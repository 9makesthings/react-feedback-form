import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Route components:
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';

// Static component:
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class App extends Component {

  submitFeedback = (feedback) => {
    console.log( `in submitFeedback...`, feedback );

    axios({
      method: 'POST',
      url: '/feedback',
      data: feedback
    })
    .then( (response) => {
      console.log( `YAY! Added feedback.` );
      // empty reducers 
      const action = { type: 'EMPTY_STATE' };
      this.props.dispatch( action );

    })
    .catch( (error) => {
      console.log( `Error adding feedback.`, error );
      alert( `Could not submit feedback. Try again later.`);
    })
  } 

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>

          <div>
            {/* routes will go here... */}
            <Route exact path ="/" component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/support" component={Supported} />
            <Route path="/comments" component={Comments} />
            <Route path="/success" component={Success} />
          </div>

          <ReviewFeedback submitFeedback={this.submitFeedback} />

        </div>
      </Router>
    );
  }
}

export default connect()(App);
