import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HourSlots from './pages/HourSlots';
import LogDetails from './pages/LogDetails';
import { Provider } from 'react-redux';
import store from './store'
import './styles/base.scss'

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Route exact path="/" component={HourSlots} />
        <Route exact path="/log-details/:hour" component={LogDetails} />
      </>
    </Router>
  </Provider>
);

export default App;
