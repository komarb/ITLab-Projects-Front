import React from "react";

export default class Description extends React.Component {
    render() {
        return(
            <div className="project-description text-muted">
                {this.props.project.description ? this.props.project.description : "Описание не приведено"}
            </div>
        );
    }
}