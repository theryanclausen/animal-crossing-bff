import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = importSchema('src/schema/schema.graphql');

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers:{
    Query: {
        bugs:(_,args,{dataSources:{AnimalCrossingAPI}})=>
          AnimalCrossingAPI.getBugs(args),
      }
    }
  });
export default schema 
