import { RESTDataSource } from "apollo-datasource-rest";

export class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakers() {
    const data = await this.get("/");
    return data;
  }

  async getSpeakerById(id: string) {
    const data = await this.get(`/${id}`);
    return data;
  }
}
