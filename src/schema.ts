import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    sessions(
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]

    sessionById(id: ID): Session

    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tag based system."
      )
    level: String
    speakers: [Speaker]
    favorite: Boolean
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
`;
