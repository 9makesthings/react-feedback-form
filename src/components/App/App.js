import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Route components:
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

// Static component:
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class App extends Component {
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
            <Route path="/supported" component={Supported} />
            <Route path="/comments" component={Comments} />
          </div>

          <ReviewFeedback />

        </div>
      </Router>
    );
  }
}

export default App;
