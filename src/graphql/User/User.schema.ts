import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    readonly id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    created_at: Date;
}