import React from "react";
import ReactDOM from "react-dom";

// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";

// import thunkMiddleware from "redux-thunk";

// import { Route, BrowserRouter as Router } from "react-router-dom";

// import rootReducer from "./modules";

import App from "./App/app-component";
// import About from "./components/About/about-container";

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// const routes = (
//   <Router>
//     <App>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </App>
//   </Router>
// );

ReactDOM.render(
  // <Provider store={store}>{routes}</Provider>,
  <App />,
  document.getElementById("root")
);
