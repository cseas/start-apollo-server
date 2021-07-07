import type { ResolverFn } from "apollo-server";

export const Query = {
  sessions: ((rootValue, args, { dataSources }, info) =>
    dataSources.sessionAPI.getSessions(args)) as ResolverFn,

  sessionById: ((rootValue, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionAPI.getSessionById(id);
    } catch (error) {
      return {
        code: "ERROR",
        message: "An error occurred",
        token: "12shqh462b",
      };
    }
  }) as ResolverFn,

  speakers: ((rootValue, args, { dataSources }, info) =>
    dataSources.speakerAPI.getSpeakers()) as ResolverFn,

  speakerById: ((rootValue, { id }, { dataSources }, info) =>
    dataSources.speakerAPI.getSpeakerById(id)) as ResolverFn,
};
