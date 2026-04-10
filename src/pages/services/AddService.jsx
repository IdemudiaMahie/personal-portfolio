import { useState } from "react";
import { create } from "../../datasource/api-services";
import { useNavigate } from "react-router-dom";
import ServiceModel from "../../datasource/serviceModel";
import FormService from "./FormService";

function AddService() {
    const [service, setService] = useState(new ServiceModel());
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        create(service).then(res => {
            if (res.success) navigate("/services");
        });
    };

    return (
        <>
            <h1>Add Service</h1>
            <FormService
                service={service}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default AddService;