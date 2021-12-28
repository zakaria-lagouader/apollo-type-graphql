import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post"
import { ApolloServerPluginLandingPageGraphQLPlayground }  from 'apollo-server-core'


const main = async () => {
  
  const schema = await buildSchema({
    resolvers: [PostResolver]
  })

  const server = new ApolloServer({
    schema,
    plugins: [
      // for offline playground
      ApolloServerPluginLandingPageGraphQLPlayground({})
    ]
  })

  const app = express();

  await server.start();

  server.applyMiddleware({ app })


  app.listen(4000, () => console.log("Server running on http://localhost:4000/graphql"))
}

main();

