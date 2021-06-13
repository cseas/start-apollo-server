import type { ResolverFn } from "apollo-server";

export const resolvers = {
  Query: {
    sessions: ((rootValue, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    }) as ResolverFn,

    sessionById: ((rootValue, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    }) as ResolverFn,
  },
};
