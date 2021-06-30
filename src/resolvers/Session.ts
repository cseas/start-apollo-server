export const Session = {
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
};
