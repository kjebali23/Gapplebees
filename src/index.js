import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider ,InMemoryCache} from '@apollo/client';

//http://localhost:8000/graphql

const client = new ApolloClient({
  uri:"http://localhost:8000/graphql",
  cache: new  InMemoryCache(),
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
