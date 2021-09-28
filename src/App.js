import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams
} from "react-router-dom";
import SearchPage from './components/SearchPage.js'
import HomePage from './components/HomePage.js';
import DetailsPage from './components/DetailsPage.js';
import './App.css'  

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route 
              path="/search-page" 
              exact
              render={(routerProps) => <SearchPage {...routerProps} />} 
            />          
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />          
            <Route 
              path="/details-page/:query" 
              exact
              render={(routerProps) => <DetailsPage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}

// class Child extends React.Component {
//   render() {

//     return (
//       <div>
//         <h3>ID: {props.match.params.myId}</h3>
//       </div>
//     );
//   }
// }