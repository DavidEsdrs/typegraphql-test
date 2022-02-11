import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Video {
    @Field(() => ID)
    id: string;

    @Field()
    description: string;
    
    @Field()
    title: string;

    @Field()
    category: string;
}