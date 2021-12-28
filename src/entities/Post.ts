import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Post {

    @Field(() => ID)
    id!: number;

    @Field(() => String)
    title!: string;

    @Field(() => String)
    body!: string;
}