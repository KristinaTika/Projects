import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { postService } from "../../services/postService";
import { authorService } from "../../services/authorService";
import { MorePosts } from "../components/post/MorePosts";

export class SinglePost extends Component {
    constructor() {
        super()

        this.state = {
            post: {},
            author: {},
            morePosts: [],
        }
    }

    componentWillReceiveProps(nextProps) {

        this.getSinglePost(nextProps.match.params.id);

    }

    componentDidMount() {
        this.getSinglePost(this.props.match.params.id);
    }

    getSinglePost = (postId) => {
        postService.fetchSinglePost(postId)
            .then((post) => {
                this.setState({
                    post: post
                });
                this.fetchAuthorRelatedData(post.userId);
            });
    }

    fetchAuthorRelatedData = (authorId) => {
        authorService.fetchSingleAuthor(authorId)
            .then((author) => {
                this.setState({
                    author: author
                });
            });
        postService.fetchPostsBySingleAuthor(authorId)
            .then((morePosts) => {
                this.setState({
                    morePosts: morePosts
                });
            });
    }

    renderMorePosts = (posts) => {

        const { morePosts } = this.state;

        return morePosts.map((post) => {
            return <MorePosts post={post} key={post.id} componentWillReceiveProps={this.componentWillReceiveProps} />
        })
    }

    render() {
        return (
            <Fragment>
                <div id="single-post-div">
                    <h4>{this.state.post.title} </h4>

                    <p id="author-name"> <Link to={"/authors/" + this.state.author.id}> {this.state.author.name} </Link> </p>
                    <p> {this.state.post.body} </p>
                    <div>
                        <div className="divider"></div>
                    </div>
                    <ul> All posts from the author:
                    {this.renderMorePosts()}
                    </ul>

                </div>
            </Fragment>
        )
    }
}