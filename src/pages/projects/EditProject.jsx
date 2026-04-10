import { useEffect, useState } from "react";
import { getOne, update } from "../../datasource/api-projects";
import { useNavigate, useParams } from "react-router-dom";
import ProjectModel from "../../datasource/projectModel";
import FormProject from "./FormProject";

function EditProject() {
    const { id } = useParams();
    const [project, setProject] = useState(new ProjectModel());
    const navigate = useNavigate();

    useEffect(() => {
        getOne(id).then(res => {
            if (res.success) setProject(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        update(project, id).then(res => {
            if (res.success) navigate("/projects");
        });
    };

    return (
        <>
            <h1>Edit Project</h1>
            <FormProject
                project={project}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default EditProject;