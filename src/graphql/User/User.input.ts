import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class UserInput {
    @Field()
    readonly username: string;

    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}

@ArgsType()
export class FindOneUser {
    @Field()
    readonly id: string;
}

@ArgsType()
export class LoginInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}