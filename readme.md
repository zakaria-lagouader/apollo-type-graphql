## Apollo Express an Type-graphql boilerplate

You can clone this repo or Follow the steps to create it from scratch :

## Step 1:

create `package.json` file :

```bash
  npm init -y
```

## Step 2

1 - install dependencies :

```bash
npm install apollo-server-express express graphql@15.3.0 reflect-metadata type-graphql
# or
yarn add apollo-server-express express graphql@15.3.0 reflect-metadata type-graphql
```

2 - install devDependencies :

```bash
npm install -D @types/express @types/graphql @types/node nodemon ts-node typescript apollo-server-core
#or
yarn add -D @types/express @types/graphql @types/node nodemon ts-node typescript apollo-server-core
```

## Step 3

create `tsconfig.json` file :

```json
{
    "compilerOptions": {
      "target": "es2017",
      "module": "commonjs",
      "lib": ["dom", "es6", "es2017", "esnext.asynciterable"],
      "skipLibCheck": true,
      "sourceMap": true,
      "outDir": "./dist",
      "moduleResolution": "node",
      "removeComments": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "strictFunctionTypes": true,
      "noImplicitThis": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "resolveJsonModule": true,
      "baseUrl": "."
    },
    "exclude": ["node_modules"],
    "include": ["./src/**/*.ts"]
  }
  
```

## Step 4

add this to `package.json` :

```json

  "scripts": {
    "start": "nodemon --exec ts-node src/index.ts"
  },

```

## Step 5

create a `src` folder and  file `index.ts`

```bash 
  src/index.ts
```

add this code to `index.ts` : 
```ts
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Query, Resolver } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground }  from 'apollo-server-core'


// the resolver
@Resolver()
export class HelloResolver {
  

  @Query(() => String)
  async hello() {
    return "Hello World";
  }
}

const main = async () => {
  
  const schema = await buildSchema({
    resolvers: [HelloResolver]
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

```

## Step 6

  start the app and you're ready to go 

  ```bash
    npm start
  ```

