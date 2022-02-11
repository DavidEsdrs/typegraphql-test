import { Field, ID, ObjectType, GraphQLISODateTime as DateTime } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@ObjectType()
@Entity("videos")
export class Video {
    @Field(() => ID)
    @PrimaryColumn()
    readonly id: string;

    @Field()
    @Column()
    description: string;
    
    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    category: string;

    @Field(() => DateTime)
    @CreateDateColumn()
    created_at: Date;

    @Field(() => DateTime)
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}