import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// import ApolloClient, { createNetworkInterface } from "apollo-client";
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
// import LoginForm from "./components/LoginForm";
// import SignupForm from "./components/SignupForm";
// import Dashboard from "./components/Dashboard";
// import requireAuth from "./components/requireAuth";

// const networkInterface = createNetworkInterface({
// uri: "/http://localhost:4000/graphql?",
// cache: new InMemoryCache(),

//   opts: {
//     credentials: "same-origin",
//   },
// });

const client = new ApolloClient({
  // networkInterface,
  uri: '/http://localhost:4000/graphql?',
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
    </Router>
  </ApolloProvider>,
);
