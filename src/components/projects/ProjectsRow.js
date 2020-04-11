import React from "react";
import Project from "./Project"

export default function ProjectsRow(props) {
    const projectRow = props.projectsSlice.map((project, index) =>
        <Project project={project.props.project} key={index}/>
    );
    return (
        <div className="card-deck mb-3 text-center">
            {projectRow}
        </div>
    )
}