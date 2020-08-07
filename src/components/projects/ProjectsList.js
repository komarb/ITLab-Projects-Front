import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import Project from './Project';
import LoadSpinner from '../utils/Loader';
import Button from 'react-bootstrap/Button';
import NavigationBar from '../utils/NavigationBar';


export default function ProjectsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({});
  useEffect(() => {
    loadProjects()
  }, []);
  async function loadProjects() {
    await API.get(`/projects`)
      .then((response) => {
        const projectsList = response.data.map((project, index) => <Project project={project} key={index} />);
        setProjects(projectsList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="navigationBarWrapper">
        <NavigationBar loadRepositoriesPage={null} pagesCount={3} />
        <Button className="toggleContent" href="/reps">Все репозитории</Button>
      </div>
      <main>
        {isLoading ? <LoadSpinner /> : (
          <>
            <div className="projectsList">
              {projects}
            </div>
          </>
        )}
      </main>
    </>
  );
}
