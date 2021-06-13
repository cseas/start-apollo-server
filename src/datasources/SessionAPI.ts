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
    return session[0];
  }
}
