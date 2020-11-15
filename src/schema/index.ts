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
      image: ({ ["image_uri"]: i }) => i,
      catchPhrase: ({ ["catch-phrase"]: c }) => c,
      museumPhrase: ({ ["museum-phrase"]: m }) => m,
      icon: ({ ["icon_uri"]: i }) => i,
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
      image: ({ ["image_uri"]: i }) => i,
      catchPhrase: ({ ["catch-phrase"]: c }) => c,
      museumPhrase: ({ ["museum-phrase"]: m }) => m,
      icon: ({ ["icon_uri"]: i }) => i,
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
      image: ({ ["image_uri"]: i }) => i,
      icon: ({ ["icon_uri"]: i }) => i,
      catchPhrase: ({ ["catch-phrase"]: c }) => c,
      museumPhrase: ({ ["museum-phrase"]: m }) => m,
      shadow: ({ shadow }) => shadow,
    },
    Villager: {
      id: ({ id }) => id,
      fileName: ({ ["file-name"]: f }) => f,
      name: ({ name }) => name["name-USen"],
      personality: ({ personality }) => personality,
      birthdayString: ({ ["birthday-string"]: b }) => b,
      birthday: ({ birthday }) => birthday,
      species: ({ species }) => species,
      gender: ({ gender }) => gender,
      subtype: ({ subtype }) => subtype,
      hobby: ({ hobby }) => hobby,
      catchPhrase: ({ ["catch-phrase"]: c }) => c,
      image: ({ ["image_uri"]: i }) => i,
      icon: ({ ["icon_uri"]: i }) => i,
      bubbleColor: ({ ["bubble-color"]: b }) => b,
      textColor: ({ ["text-color"]: c }) => c,
      saying: ({ saying }) => saying,
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
      villager: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getVillager(args),
      villagers: (_, args, { dataSources: { AnimalCrossingAPI } }) =>
        AnimalCrossingAPI.getVillagers(args),
    },
  },
});
export default schema;
