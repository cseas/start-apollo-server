import type { ResolverFn } from "apollo-server";

export const resolvers = {
  Query: {
    sessions: ((rootValue, args, { dataSources }, info) =>
      dataSources.sessionAPI.getSessions(args)) as ResolverFn,

    sessionById: ((rootValue, { id }, { dataSources }, info) =>
      dataSources.sessionAPI.getSessionById(id)) as ResolverFn,

    speakers: ((rootValue, args, { dataSources }, info) =>
      dataSources.speakerAPI.getSpeakers()) as ResolverFn,

    speakerById: ((rootValue, { id }, { dataSources }, info) =>
      dataSources.speakerAPI.getSpeakerById(id)) as ResolverFn,
  },

  Session: {
    async speakers(session: any, args: any, { dataSources }: any) {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      return speakers.filter((speaker: any) =>
        Boolean(
          session.speakers.find(
            (sessionSpeaker: any) => sessionSpeaker.id === speaker.id
          )
        )
      );
    },
  },
};
