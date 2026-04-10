import { useEffect, useState } from "react";
import { list, remove } from "../datasource/api-services";
import { Link } from "react-router-dom";

function Services() {
    const [services, setServices] = useState([]);

    const loadServices = () => {
        list().then(res => {
            if (res.success) setServices(res.data);
        });
    };

    useEffect(() => {
        loadServices();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Delete this service?")) {
            remove(id).then(() => loadServices());
        }
    };

    return (
        <>
            <h1>Services</h1>

            <Link to="/services/add">Add Service</Link>

            {services.map(service => (
                <div key={service.id} className="service-card">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link to={`/services/edit/${service.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(service.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default Services;