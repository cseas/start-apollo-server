import { ApolloServer } from "apollo-server";

import { SessionAPI, SpeakerAPI } from "./datasources";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const PORT = process.env.PORT || 4000;

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`);
});
