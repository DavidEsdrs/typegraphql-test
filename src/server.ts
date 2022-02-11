import "reflect-metadata";
import "./data/index";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { VideoResolver } from "./graphql/Video/Video.resolver";
import { UserResolver } from "./graphql/User/User.resolver";
import { Container } from "typedi";
import { useContainer } from "typeorm";

const bootstrap = async () => {
    useContainer(Container);
    const schema = await buildSchema({
        resolvers: [VideoResolver, UserResolver],
        container: Container
    });
    const server = new ApolloServer({ schema });
    await server.listen({ port: 4000 }, () => console.log(`running...`));
}

bootstrap();