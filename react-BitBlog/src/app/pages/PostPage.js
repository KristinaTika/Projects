import React, { Component, Fragment } from "react";
import { postService } from "../../services/postService";
import { PostItem } from "../components/post/PostItem";

export class PostPage extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        postService.fetchPosts()
            .then(response => {
                this.setState({
                    posts: response
                })
            })
        .catch(message => {
            console.log(message)
            alert("Failed to load posts.")
        });
    }

    renderPosts = (allPosts) => {

        const {posts} = this.state;

        return posts.map((post) => {
            return <PostItem post={post} key={post.id} />
        })
    }

    render() {

        return (
            <Fragment>
                <h1 className="center">POSTS </h1>
                <div>
                    {this.renderPosts()}
                </div>
            </Fragment>
        )
    }
}