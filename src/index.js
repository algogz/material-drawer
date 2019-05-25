
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import gql from "graphql-tag";


const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

/*
client
.query({
  query: gql`{
    books {
      title
      author
    }
  }
  `
})
.then(({ data }) => console.log('gql data', { data }));
 */

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.querySelector('#root'));
    