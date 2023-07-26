import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Greeting from "./Greeting";
import store from ".redux/store";

const App = () => (
    <Provider store={store}>
      <Router>
        <Route path="/" element={<Greeting />} />
      </Router>
    </Provider>
    );

export default App;