import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class MoreButton extends React.Component {
    render() {
        return(
            <div className="moreButton">
                <Link to={`/projects/${this.props.project.platform}/${this.props.project.path}`}>
                    <Button>Подробнее</Button>
                </Link>
            </div>
        );
    }
}