import React, { Fragment } from "react";

export const Footer = () => {


    return (

        <Fragment>
            <footer className="page-footer">
                <div className="container center footer">
                    © {new Date().getFullYear()} Copyright Kristina Butkovic
                </div>
            </footer>
        </Fragment>
    )
}