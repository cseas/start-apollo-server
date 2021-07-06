import { ApolloError } from "apollo-server";

export const Session = {
  async speakers(session: any, args: any, { dataSources }: any) {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      return speakers.filter((speaker: any) =>
        Boolean(
          session.speakers.find(
            (sessionSpeaker: any) => sessionSpeaker.id === speaker.id
          )
        )
      );
    } catch (error) {
      return new ApolloError("Unable to get speakers", "SPEAKER_API_ERROR", {
        token: "uniqueToken",
      });
    }
  },
};
