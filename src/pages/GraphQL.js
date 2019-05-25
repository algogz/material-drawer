import React from 'react';
import {Query} from "react-apollo";
import gql from "graphql-tag";


export default class extends React.Component {
  // see https://www.apollographql.com/docs/react/api/react-apollo

  state = {};

  componentDidMount() {

  }

  render() {
    /*
    const {client} = this.props;
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
    .then(({ data }) => console.log('gql data --', { data }));
    */
    return (
      <React.Fragment>
        GraphQL Test Page
        <hr/>
        <ul>
          <Query query={gql`
            {
              books {
                title
                author
              }
            }
          `}
          >
            {({loading, error, data}) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.books.map(({title, author}) => (
                <li key={title}>{title} ({author})</li>
              ));

            }}
          </Query>
        </ul>
      </React.Fragment>
    )
  }
}
