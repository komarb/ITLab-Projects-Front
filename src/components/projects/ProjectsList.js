import React from "react";
import ProjectsRow from "./ProjectsRow";


export default function ProjectsList(props) {
    let projectsSlices = [];
    let i,j,temparray,chunk = 3;
    for (i=0,j=props.projects.length; i<j; i+=chunk) {
        temparray = props.projects.slice(i,i+chunk);
        projectsSlices.push(temparray);
    }
    console.log(projectsSlices);
    const projectsRows = projectsSlices.map((projectsSlice, index) =>
        <ProjectsRow projectsSlice={projectsSlice}/>
    );
    return (
        <div className="projectList card-deck mb-3 text-center">
            {props.projects}

        </div>
    )
}