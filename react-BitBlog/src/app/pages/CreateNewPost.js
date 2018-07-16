import React, { Component, Fragment } from 'react';
import { postService } from '../../services/postService';
import { Link } from "react-router-dom";

export class CreateNewPost extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            body: "",
            validationMessage: true,
        }
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleBody = (event) => {
        this.setState({
            body: event.target.value
        });
    }

    createPost = (event) => {

        const postData = {
            title: this.state.title,
            body: this.state.body
        }

        if (postData.title === "" || postData.body === "") {
            event.preventDefault();
            this.setState({
                validationMessage: false
            })

        } else {

            postService.createNewPost(postData)
                .then((response) => {
                    console.log(response);
                });
        }
    }

    handleCancel = (event) => {
        this.setState({
            title: "",
            body: "",
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p className="title">Title:</p>
                    <div id="post-title">
                    </div>
                    <input type="text" name="title" id="title" placeholder="Enter title of the post..." onChange={this.handleTitle} value={this.state.title} />
                    <p className="text-content">Text content: </p>
                    <textarea rows="10" cols="150" id="content" placeholder="Enter content of the post..." onChange={this.handleBody} value={this.state.body}>
                    </textarea>
                    <div className="validation">
                        {this.state.validationMessage ? "" : "Input required."}
                    </div>
                    <Link to="/post/new"><input type="button" value="Cancel" className="cancel" onClick={this.handleCancel} /></Link>
                    <Link to="/home"><input type="button" value="Post" onClick={this.createPost} className="create-post" /></Link>
                </div>
            </Fragment>
        );
    }
}

