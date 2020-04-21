import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Platform extends React.Component {
    render() {
        return(
            <div className="platform">
                {this.props.project.platform === "github" ? <a href={this.props.project.html_url}><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</a> :
                    <a href={this.props.project.html_url}><FontAwesomeIcon icon={['fab', 'gitlab']} /> GitLab</a> }
            </div>
        );
    }
}