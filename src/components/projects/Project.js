import React from "react";
import ReadyBar from "../utils/ReadyBar";
import MoreButton from "../utils/MoreButton";
import LastUpdated from "../utils/LastUpdated";
import Platform from "../utils/Platform";
import Description from "../utils/Description";
import Language from "../utils/Language";

export default class Project extends React.Component {
    render() {
        return(
            <div className="project card mb-4 shadow-sm">
                <h2 className="card-title">{this.props.project.title}</h2>
                <Platform project={this.props.project}/>
                <Description project={this.props.project}/>
                <Language project={this.props.project}/>
                <ReadyBar openIssues={this.props.project.open_issues_count}/>
                <LastUpdated project={this.props.project}/>
                <MoreButton project={this.props.project}/>
            </div>
        );
    }
}