import type { ResolverFn } from "apollo-server";

export const Mutation = {
  toggleFavoriteSession: ((rootValue, { id }, { dataSources }, info) =>
    dataSources.sessionAPI.toggleFavoriteSession(id)) as ResolverFn,
};
