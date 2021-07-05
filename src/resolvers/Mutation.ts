import type { ResolverFn } from "apollo-server";

export const Mutation = {
  toggleFavoriteSession: ((rootValue, { id }, { dataSources }, info) =>
    dataSources.sessionAPI.toggleFavoriteSession(id)) as ResolverFn,
  addNewSession: ((rootValue, { session }, { dataSources }, info) =>
    dataSources.sessionAPI.addNewSession(session)) as ResolverFn,
};
