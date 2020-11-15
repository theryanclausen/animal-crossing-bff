import { RESTDataSource } from "apollo-datasource-rest";
import {
  QueryBugsArgs,
  QueryBugArgs,
  QueryFishArgs,
  QueryFishesArgs,
  QuerySeaCreatureArgs,
  QuerySeaCreaturesArgs
} from "../types/schema-def";
import { BugApi, FishApi, SeaCreatureApi } from "./apiTypes";

class AnimalCrossingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://acnhapi.com/v1/";
  }

  getFish({ id }: QueryFishArgs): Promise<FishApi> {
    return this.get(`fish/${id}`);
  }

  async getFishes({
    month = null,
    isSouthern = false,
  }: QueryFishesArgs): Promise<FishApi[]> {
    try {
      const result: { [name: string]: FishApi } = await this.get("fish");
      return month
        ? Object.values(result).filter(({ availability }) =>
            availability[
              isSouthern ? "month-array-southern" : "month-array-northern"
            ].includes(month)
          )
        : Object.values(result);
    } catch (e) {
      return e;
    }
  }

  getBug({ id }: QueryBugArgs): Promise<BugApi> {
    return this.get(`bugs/${id}`);
  }

  async getBugs({
    month = null,
    isSouthern = false,
  }: QueryBugsArgs): Promise<BugApi[]> {
    try {
      const result: { [name: string]: BugApi } = await this.get("bugs");
      return month
        ? Object.values(result).filter(({ availability }) =>
            availability[
              isSouthern ? "month-array-southern" : "month-array-northern"
            ].includes(month)
          )
        : Object.values(result);
    } catch (e) {
      return e;
    }
  }

  getSeaCreature({ id }: QuerySeaCreatureArgs): Promise<SeaCreatureApi> {
    return this.get(`sea/${id}`);
  }

  async getSeaCreatures({
    month = null,
    isSouthern = false,
  }: QuerySeaCreaturesArgs): Promise<SeaCreatureApi[]> {
    try {
      const result: { [name: string]: SeaCreatureApi } = await this.get("sea");
      return month
        ? Object.values(result).filter(({ availability }) =>
            availability[
              isSouthern ? "month-array-southern" : "month-array-northern"
            ].includes(month)
          )
        : Object.values(result);
    } catch (e) {
      return e;
    }
  }
}

export default AnimalCrossingAPI;
