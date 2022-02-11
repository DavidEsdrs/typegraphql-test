import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class VideoInput {
    @Field()
    description: string;

    @Field()
    title: string;

    @Field()
    category: string;
}