import React, { Fragment, Component } from "react";
import { authorService } from "../../services/authorService";
import {SingleAuthor} from "../components/author/SingleAuthor";

export class AuthorsPage extends Component {
    constructor() {
        super()

        this.state = {
            authors: [],
        }
    }

    componentDidMount() {
        this.getAuthors();
    }

    getAuthors = () => {
        authorService.fetchAuthors()
            .then((response) => {
                this.setState({
                    authors: response
                })
            })
            .catch(message => {
                console.log(message)
                alert("Failed to load posts.")
            });
    }

    renderAuthors = users => {

        const {authors} = this.state;

       return authors.map((author) => {
            return <SingleAuthor author={author} key={author.id} />
        })
    }


    render() {
        return (
            <Fragment>
                <h1 className="center">
                    AUTHORS ({this.state.authors.length})
                </h1>
                <div>
                    {this.renderAuthors()}
                </div>
            </Fragment>
        )
    }
}