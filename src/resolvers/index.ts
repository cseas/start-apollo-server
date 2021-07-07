import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Session } from "./Session";

export const resolvers = {
  Query,
  Mutation,
  Session,
  SessionOrError: {
    __resolveType(obj: any) {
      if (obj.code) {
        return "Error";
      }
      return "Session";
    },
  },
};
