# Start Apollo Server

Starter code for setting up a GraphQL API with Apollo Server. Inspired by [Building a GraphQL API with Apollo Server][1] by Jonathan Mills.

Run `npm run dev` to start the GraphQL server locally.
A mock REST API is available for experimenting under [mockApiSpeakers](mockApiSpeakers).

## Project structure

The `src` directory has the following contents:

- **data:** Contains mock data for our GraphQL API.
- **datasources:** Contains information about where we get the data from.
- **resolvers:** Defines how we handle client requests.
- **schema.ts:** Defines the structure of our GraphQL API.
- **server.ts:** Runs the GraphQL server.

[1]: https://app.pluralsight.com/library/courses/graphql-api-apollo-server/table-of-contents
