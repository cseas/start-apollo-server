import type { ResolverFn } from "apollo-server";

export const Query = {
  sessions: ((rootValue, args, { dataSources }, info) =>
    dataSources.sessionAPI.getSessions(args)) as ResolverFn,

  sessionById: ((rootValue, { id }, { dataSources }, info) =>
    dataSources.sessionAPI.getSessionById(id)) as ResolverFn,

  speakers: ((rootValue, args, { dataSources }, info) =>
    dataSources.speakerAPI.getSpeakers()) as ResolverFn,

  speakerById: ((rootValue, { id }, { dataSources }, info) =>
    dataSources.speakerAPI.getSpeakerById(id)) as ResolverFn,
};
