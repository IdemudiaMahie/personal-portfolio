import { useState } from "react";
import { create } from "../../datasource/api-references";
import { useNavigate } from "react-router-dom";
import ReferenceModel from "../../datasource/referenceModel";
import FormReference from "./FormReference";

function AddReference() {
    const [reference, setReference] = useState(new ReferenceModel());
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReference(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        create(reference).then(res => {
            if (res.success) navigate("/references");
        });
    };

    return (
        <>
            <h1>Add Reference</h1>
            <FormReference
                reference={reference}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default AddReference;