//TODO: Save downloaded projects/issues
import React from "react";
import API from "./api/API"
import Project from "./components/projects/Project";
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectsList from "./components/projects/ProjectsList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

export default class App extends React.Component {
    state = {
        projects: [],
        isLoading: true,
        showingDetailed: false
    };
    async componentDidMount() {
        await API.get('/reps')
            .then(response =>
                response.data.map(project => ({
                    title: project.name,
                    description: project.description ? project.description : "Описание не приведено",
                    language: project.language,
                    open_issues: project.open_issues
                })))
            .then(projects => {
                this.setState({
                    projects: projects,
                    isLoading: false
                });
                console.log(projects)
            })
            .catch(err => console.log(err));
    }
    render() {
        const projectsArray = this.state.projects.map((project, index) =>
            <Project project={project} key={index}/>
        );
        return(
            <Router>
                <Switch>
                    <Route path={`/projects/:projectName`}>
                        <ProjectDetails/>
                    </Route>
                    <Route path="/projects">
                        {this.state.isLoading ? <div>Loading, please wait...</div> : (
                            <ProjectsList projects={projectsArray}/>
                        )}
                    </Route>
                    <Route path="/">
                        <div>Projects Home</div>
                        <Link to="/projects">Projects List</Link>
                    </Route>
                </Switch>
            </Router>
        );
  }
}
