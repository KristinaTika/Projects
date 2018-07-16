import React, { Fragment } from "react";
import {Link} from "react-router-dom";

export const PostItem = (props) => {

    return (
        <Fragment>
            <div>
                <h3><Link to={"/posts/" + props.post.id}>{props.post.title}</Link></h3>
                <p>{props.post.body}</p>
                <hr />
            </div>
        </Fragment>
    )
}

