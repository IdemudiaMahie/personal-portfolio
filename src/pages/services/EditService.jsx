import { useEffect, useState } from "react";
import { getOne, update } from "../../datasource/api-services";
import { useNavigate, useParams } from "react-router-dom";
import ServiceModel from "../../datasource/serviceModel";
import FormService from "./FormService";

function EditService() {
    const { id } = useParams();
    const [service, setService] = useState(new ServiceModel());
    const navigate = useNavigate();

    useEffect(() => {
        getOne(id).then(res => {
            if (res.success) setService(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        update(service, id).then(res => {
            if (res.success) navigate("/services");
        });
    };

    return (
        <>
            <h1>Edit Service</h1>
            <FormService
                service={service}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default EditService;