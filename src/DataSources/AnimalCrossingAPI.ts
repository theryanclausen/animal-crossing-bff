import { RESTDataSource } from "apollo-datasource-rest";
import { Bug, QueryBugsArgs } from "../types/schema-def";
import { BugApi } from "./apiTypes";

class AnimalCrossingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://acnhapi.com/v1/";
  }

  async getBugs({
    month = null,
    isSouthern = false,
  }: QueryBugsArgs): Promise<Bug[]> {
    try {
      const result: { [name: string]: BugApi } = await this.get("bugs");
      const bugs: Bug[] = (Object.values(result).map(
        ({
          ["file-name"]: fileName,
          availability: {
            "month-array-northern": northernMonths,
            "month-array-southern": southernMonths,
            "time-array": timeArray,
          },
          name: { "name-USen": name },
          price,
          "price-flick": priceFlick,
          "catch-phrase": catchPhrase,
          image_uri: image,
          icon_uri: icon,
        }: BugApi) => ({
          fileName,
          name,
          northernMonths,
          southernMonths,
          price,
          priceFlick,
          catchPhrase,
          image,
          icon,
          timeArray,
        })
      ) as unknown) as Bug[];
      return month
        ? bugs.filter(
            ({ [isSouthern ? "southernMonths" : "northernMonths"]: months }) =>
              months.includes(month)
          )
        : bugs;
    } catch (e) {
      return e;
    }
  }
}

export default AnimalCrossingAPI;
