import { Post } from "../entities/Post";
import { Resolver, Query, Arg, Mutation, ID } from "type-graphql";

const db: Post[] = [];

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return db;
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => ID) id: number): Promise<Post | null> {
    return db.find((post) => post.id == id) ?? null;
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("title", () => String) title: string,
    @Arg("body", () => String) body: string
  ): Promise<Post> {
    const post: Post = { id: db.length, title, body };

    db.push(post);
    return post;
  }
}
