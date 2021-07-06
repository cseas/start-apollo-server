import { ApolloError, ApolloServer } from "apollo-server";

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
  formatError: (err) => {
    // thrown when mock speaker api is off
    // @ts-ignore
    if (err.extensions.code === "INTERNAL_SERVER_ERROR") {
      return new ApolloError("We are having some trouble", "ERROR", {
        token: "uniqueToken",
      });
    }
    return err;
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`);
});
