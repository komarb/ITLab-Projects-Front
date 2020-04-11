import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class MoreButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="moreButton">
                <Link to={`/projects/${this.props.project.title}`}>
                    <Button>Подробнее</Button>
                </Link>
            </div>
        );
    }
}