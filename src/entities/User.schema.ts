import { Field, ID, ObjectType, GraphQLISODateTime as DateTime } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@ObjectType()
@Entity("users")
export class User {
    @Field(() => ID)
    @PrimaryColumn()
    readonly id: string;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

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