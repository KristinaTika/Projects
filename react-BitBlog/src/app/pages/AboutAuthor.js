import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { authorService } from "../../services/authorService";

export class AboutAuthor extends Component {
    constructor() {
        super()

        this.state = {
            author: {},
        }
    }

    componentDidMount() {
        this.getSingleAuthor()
    }

    getSingleAuthor = () => {
        authorService.fetchSingleAuthor(this.props.match.params.id)
            .then((author) => {
                this.setState({
                    author: author
                });
            });
    }


    render() {

        if (!this.state.author.name) {
            return null;
        }

        return (
            <Fragment>
                <div className="container">
                    <p > <Link to="/authors">&#8592; All Authors</Link></p>
                    <h1 className="single-author center">Single Author</h1>
                    <div className="row">
                        <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-9-1.png" alt="avatar" className="col s6" />
                        <h3 className="center"> {this.state.author.name} </h3>
                        <p className="center">username:<b>{this.state.author.username}</b></p>
                        <p className="center">email:<b>{this.state.author.email}</b></p>
                        <p className="center">phone:<b>  {this.state.author.phone}</b></p>
                    </div>
                    <div>
                        <div className="divider col s12"></div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <h3 className="col s12">Address</h3>
                            <p className="col s12">street:<b>{this.state.author.address.street}</b></p>
                            <p className="col s12">city:<b>{this.state.author.address.city}</b></p>
                            <p className="col s12">zipcode:<b>{this.state.author.address.zipcode}</b></p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917135.0113557822!2d56.554056183012996!3d-20.2005130594867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c504df94474c9%3A0x4203d9c2116bd031!2z0JzQsNGD0YDQuNGG0LjRmNGD0YE!5e0!3m2!1ssr!2srs!4v1531678660386" width="600" height="300" frameBorder="0" allowFullScreen className="col s6 map"></iframe>
                        <div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3>Company</h3>
                        <p><b>name:</b>{this.state.author.company.name}</p>
                        <p><b>slogan:</b>{this.state.author.company.catchPhrase}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

