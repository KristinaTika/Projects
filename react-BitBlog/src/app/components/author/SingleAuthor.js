import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import { postService } from "../../../services/postService";

export const SingleAuthor = (props) => {


    return(
        <Fragment>
           <h4><Link to={"/authors/" + props.author.id}>{props.author.name} ({postService.fetchNumberOfPosts(props.author.id)} - posts)</Link></h4>
           <hr />
        </Fragment>
    )
}
