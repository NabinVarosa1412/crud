// import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/connection';
 import * as dotenv from 'dotenv';
 dotenv.config();
// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
// import { typeDefs, resolvers } from './model/user_model';
 import typeDefs from './graphql/user_schema';
 import resolvers from './graphql/resolvers';


//  async function startserver 
const startServer = async () => {
const app = express();
const httpServer = http.createServer(app);

app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 // connect the sequelize database
  sequelize.authenticate().then(() => {
  console.log('Database connected!');
}).catch((err: Error) => {
  console.error('Error connecting to the database:', err.message);
});

// connect the apollo database
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

startServer();


