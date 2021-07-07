import { sessions } from "../data/sessions";
import { DataSource } from "apollo-datasource";
import { filter } from "lodash";

interface Session {
  id: number;
}

export class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  getSessions(args: Session) {
    return filter(sessions, args);
  }

  getSessionById(id: string) {
    const session = sessions.filter(
      (session: Session) => session.id === parseInt(id)
    );
    throw new Error();
    return session[0];
  }

  toggleFavoriteSession(id: string) {
    const session = sessions.find(
      (session: Session) => session.id === parseInt(id)
    );

    // @ts-ignore
    session.favorite = !session.favorite;

    return session;
  }

  addNewSession(session: Session) {
    session.id = 12;
    // @ts-ignore
    sessions.push(session);
    return session;
  }
}
