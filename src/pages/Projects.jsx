import { useEffect, useState } from "react";
import { list, remove } from "../datasource/api-projects";
import { Link } from "react-router-dom";
// import WeatherApp from '../assets/img/WeatherApp Image.png'
// import contactManagerApp from '../assets/img/contact-manager-app.jpg'
// import recipeApp from '../assets/img/recipe app.png'

function Projects() {
    const [projects, setProjects] = useState([]);

    const loadProjects = () => {
        list().then(res => {
            if (res.success) setProjects(res.data);
        });
    };

    useEffect(() => {
        loadProjects();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Delete this project?")) {
            remove(id).then(() => loadProjects());
        }
    };

    return (
        <>
            <h1>Projects</h1>

            <Link to="/projects/add">Add Project</Link>

            {projects.map(project => (
                <div key={project.id} className="project">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <Link to={`/projects/edit/${project.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default Projects;