import { postsEndpoint, singlePostEndpoint, postsByAuthorEndpoint } from "../shared/constants";
import { get, post } from "./APIService";
import { Post } from "../entities/Post";


class PostService {
    constructor() {

        this.data = {
            posts: [],
        }
    }

    fetchPosts() {
        return get(postsEndpoint)
            .then((response) => {
                this.data.posts = response;
                return response.map(post => {
                    const userId = post.userId;
                    const id = post.id;
                    const title = post.title;
                    const body = post.body;

                    const myPost = new Post(userId, id, title, body);
                    return myPost;
                })
            })
    }

    fetchSinglePost(postId) {
        return get(`${singlePostEndpoint}${postId}`)
    }

    fetchPostsBySingleAuthor(authorId) {
        return get(`${postsByAuthorEndpoint}${authorId}`)
    }

    fetchNumberOfPosts(authorId) {

        let counter = 0;
        for (let i = 0; i < this.data.posts.length; i++) {
            if (authorId === this.data.posts[i].userId) {
                counter++;
            }
        }
        return counter;
    }

    createNewPost(postData) {
        return post(postsEndpoint, postData)
    }
}

export const postService = new PostService;