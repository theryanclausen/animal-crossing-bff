import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
const typeDefs = importSchema("src/schema/schema.graphql");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    SeaCreature: {
      id: ({ id }) => id,
      fileName: ({ ["file-name"]: f }) => f,
      name: ({ name }) => name["name-USen"],
      northernMonths: ({ availability }) =>
        availability["month-array-northern"],
      southernMonths: ({ availability }) =>
        availability["month-array-southern"],
      timeArray: ({ availability }) => availability["time-array"],
      price: ({ price }) => price,
      image: ({ ["image_url"]: i }) => i,
      icon: ({ ["icon_url"]: i }) => i,
      speed: ({ speed }) => speed,
    },
    Bug: {
      id: ({ id }) => id,
      fileName: ({ ["file-name"]: f }) => f,
      name: ({ name }) => name["name-USen"],
      northernMonths: ({ availability }) =>
        availability["month-array-northern"],
      southernMonths: ({ availability }) =>
        availability["month-array-southern"],
      timeArray: ({ availability }) => availability["time-array"],
      price: ({ price }) => price,
      priceFlick: ({ ["price-flick"]: p }) => p,
      image: ({ ["image_url"]: i }) => i,
      icon: ({ ["icon_url"]: i }) => i,
    },
    Fish: {
      id: ({ id }) => id,
      fileName: ({ ["file-name"]: f }) => f,
      name: ({ name }) => name["name-USen"],
      northernMonths: ({ availability }) =>
        availability["month-array-northern"],
      southernMonths: ({ availability }) =>
        availability["month-array-southern"],
      timeArray: ({ availability }) => availability["time-array"],
      price: ({ price }) => price,
      priceCJ: ({ ["price-cj"]: p }) => p,
      image: ({ ["image_url"]: i }) => i,
      icon: ({ ["icon_url"]: i }) => i,
      shadow: ({ shadow }) => shadow,
    },
    Query: {
      bugs: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getBugs(args),
      bug: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getBug(args),
      fishes: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getFishes(args),
      fish: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getFish(args),
      seaCreatures: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getSeaCreatures(args),
      seaCreature: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getSeaCreature(args),
    },
  },
});
export default schema;
