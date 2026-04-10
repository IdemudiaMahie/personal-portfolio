import { useState } from "react";
import { create } from "../../datasource/api-projects";
import { useNavigate } from "react-router-dom";
import ProjectModel from "../../datasource/projectModel";
import FormProject from "./FormProject";

function AddProject() {
    const [project, setProject] = useState(new ProjectModel());
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        create(project).then(res => {
            if (res.success) navigate("/projects");
        });
    };

    return (
        <>
            <h1>Add Project</h1>
            <FormProject
                project={project}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default AddProject;