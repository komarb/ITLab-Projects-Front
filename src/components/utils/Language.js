import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Language extends React.Component {
    render() {
        return(
            <div className="project-language">
                {this.props.project.language ? <p><FontAwesomeIcon icon="code" /> {this.props.project.language}</p> : ""}
            </div>
        );
    }
}