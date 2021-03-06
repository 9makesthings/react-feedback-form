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
import Admin from '../Admin/Admin';

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

  getFeedback = () => {
    console.log( `in getFeedback...` );
    
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then( (response) => {
      console.log( `Got feedback data from server!` );
      const action = { type: 'GET_FEEDBACK', payload: response.data };
      this.props.dispatch( action );
    })
    .catch( (error) => {
      console.log( `Error getting feedback.`, error );
      alert( `Sorry, couldn't get feedback data. Try again later.` );
    })
  }

  componentDidMount() {
    this.getFeedback();
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
            <Route path="/review" render={(props) => <ReviewFeedback {...props} submitFeedback={this.submitFeedback} />} />
            <Route path="/success" component={Success} />

            <Route path="/admin" render={(props) => <Admin {...props} getFeedback={this.getFeedback}/>}  />
          </div>


        </div>
      </Router>
    );
  }
}

export default connect()(App);
