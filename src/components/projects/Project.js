import React from "react";
import ReadyBar from "../utils/ReadyBar";
import MoreButton from "../utils/MoreButton";

export default class Project extends React.Component {
    render() {
        return(
            <div className="project card mb-4 shadow-sm">
                <h2 className="card-title">{this.props.project.title}</h2>
                <p>{this.props.project.description}</p>
                <p>{this.props.project.language}</p>
                <ReadyBar openIssues={this.props.project.open_issues}/>
                <MoreButton project={this.props.project}/>
            </div>
        );
    }
}