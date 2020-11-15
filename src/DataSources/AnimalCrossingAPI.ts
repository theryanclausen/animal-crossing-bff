import { RESTDataSource } from "apollo-datasource-rest";
import {
  QueryBugsArgs,
  QueryBugArgs,
  QueryFishArgs,
  QueryFishesArgs,
  QuerySeaCreatureArgs,
  QuerySeaCreaturesArgs,
  QueryVillagerArgs,
  QueryVillagersArgs,
} from "../types/schema-def";
import { BugApi, FishApi, SeaCreatureApi, VillagerApi } from "./apiTypes";

class AnimalCrossingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://acnhapi.com/v1/";
  }

  getVillager({ id }: QueryVillagerArgs): Promise<VillagerApi> {
    return this.get(`villagers/${id}`);
  }

  async getVillagers({
    month = null,
    ids = [],
  }: QueryVillagersArgs): Promise<VillagerApi[]> {
    try {
      const result: { [name: string]: VillagerApi } = await this.get(
        "villagers"
      );
      return month || ids.length
        ? Object.values(result).filter(({ id, birthday }) => {
            if (ids.length && !ids.includes(id)) {
              return false;
            }
            if (month && month !== parseInt(birthday.split("/")[1])) {
              return false;
            }
            return true;
          })
        : Object.values(result);
    } catch (e) {
      return e;
    }
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
