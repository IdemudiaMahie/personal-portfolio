import { useEffect, useState } from "react";
import { getOne, update } from "../../datasource/api-references";
import { useNavigate, useParams } from "react-router-dom";
import ReferenceModel from "../../datasource/referenceModel";
import FormReference from "./FormReference";

function EditReference() {
    const { id } = useParams();
    const [reference, setReference] = useState(new ReferenceModel());
    const navigate = useNavigate();

    useEffect(() => {
        getOne(id).then(res => {
            if (res.success) setReference(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReference(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        update(reference, id).then(res => {
            if (res.success) navigate("/references");
        });
    };

    return (
        <>
            <h1>Edit Reference</h1>
            <FormReference
                reference={reference}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default EditReference;