import { Post } from "./post"

export interface Wall {
    id: number,
    name: string,
    description: string,
    color: string,
    posts: Post[],
}