import { Resolver, Args, Mutation, Query } from "type-graphql";
import { User } from "../../entities/User.schema";
import { FindOneUser, LoginInput, UserInput } from "./User.input";
import { IUsersRepository } from "../../repositories/Users/IUsersRepository";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/Users/UsersRepository";
import { sign, verify } from "jsonwebtoken";
import { Inject, Service } from "typedi";

@Resolver(User)
export class UserResolver {
    constructor(
        @Inject(() => UsersRepository) private usersRepo: IUsersRepository
    ) {}

    @Query(() => [User!]!)
    async users() {
        const users = await this.usersRepo.getUsers();
        return users;
    }

    @Query(() => User)
    async user(
        @Args() { id }: FindOneUser
    ) {
        const user = await this.usersRepo.findById(id);
        return user;
    }

    @Mutation(() => User)
    async createUser(
        @Args() { email, password, username }: UserInput
    ) {
        const userAlreadyExists = await this.usersRepo.findByEmail(email);

        if(userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const user = this.usersRepo.create({ email, password, username });

        await this.usersRepo.saveUser(user);

        return user;
    }

    @Mutation(() => String)
    async login(
        @Args() { email, password }: LoginInput
    ) {
        const user = await this.usersRepo.findByEmail(email);

        if(!user) {
            throw new Error("Invalid email!");
        }

        const isCorrectPassword = user.password === password;

        if(!isCorrectPassword) {
            throw new Error("Invalid password!");
        }

        const token = sign({ email }, process.env.JWT_SECRET ?? String(Math.floor(Math.random() * 100)), {
            subject: user.id
        });

        return token;
    }
}