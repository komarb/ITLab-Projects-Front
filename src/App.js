//TODO: Save downloaded projects/issues
import React from "react";
import API from "./api/API"
import Project from "./components/projects/Project";
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectsList from "./components/projects/ProjectsList";
import Loader from 'react-loader-spinner'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faGitlab }  from '@fortawesome/free-brands-svg-icons'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import NavigationBar from "./components/utils/NavigationBar";
import LoadSpinner from "./components/utils/Loader";
library.add(faGithub, faGitlab, faCode, faClock, faChevronDown, faChevronUp, faQuestionCircle);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.loadRepositoriesPage = this.loadRepositoriesPage.bind(this);
    }
    state = {
        projects: [],
        isLoading: true,
        initialLoad: false
    };
    async loadRepositoriesPage(page) {
        this.setState({
            isLoading: true
        });

        await API.get('/reps?page=' + page)
            .then(response => {
                let projects = response.data.map(project => ({
                    id: project.id,
                    title: project.name,
                    platform: project.platform,
                    path: project.path_with_namespace,
                    description: project.description,
                    language: project.language,
                    open_issues_count: project.open_issues_count,
                    updated_at: project.updated_at,
                    html_url: project.html_url
                }))
                console.log(response.status);       //TODO: this is not good
                console.log(response.statusText);
                console.log(response.headers);
                if (!this.state.initialLoad) {
                    this.setState({
                        pagesCount: parseInt(response.headers['x-total-pages']),
                        initialLoad: true
                    });
                }
                return projects
            })
            .then(projects => {
                this.setState({
                    projects: projects,
                    isLoading: false
                });
                console.log(projects);
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.loadRepositoriesPage(1)
    }

    render() {
        const projectsArray = this.state.projects.map((project, index) =>
            <Project project={project} key={index}/>
        );
        return(
            <Router>
                <Switch>
                    <Route path={`/projects/:platform/:projectPath`}>
                        <ProjectDetails/>
                    </Route>
                    <Route path="/projects">
                        <div className="main">
                            {this.state.initialLoad ? <NavigationBar loadRepositoriesPage={this.loadRepositoriesPage} pagesCount={this.state.pagesCount}/> : ""}
                            {this.state.isLoading ? <LoadSpinner/> : <ProjectsList projects={projectsArray}/>}
                        </div>
                    </Route>
                    <Route path="/projects?page=:pageNumber">
                        <div>
                            {this.state.initialLoad ? <NavigationBar loadRepositoriesPage={this.loadRepositoriesPage} pagesCount={this.state.pagesCount}/> : ""}
                            {this.state.isLoading ? <LoadSpinner/> : <ProjectsList projects={projectsArray}/>}
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
  }
}
