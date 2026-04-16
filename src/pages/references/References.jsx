import { useEffect, useState } from "react";
import { list, remove } from "../../datasource/api-references";
import { Link } from "react-router-dom";

function References() {
    const [references, setReferences] = useState([]);

    const loadReferences = () => {
        list().then(res => {
            if (res.success) setReferences(res.data);
        });
    };

    useEffect(() => {
        loadReferences();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Delete this reference?")) {
            remove(id).then(() => loadReferences());
        }
    };

    return (
        <>
            <h1>References</h1>

            <Link to="/references/add">Add Reference</Link>

            {references.map(ref => (
                <div key={ref.id}>
                    <h3>{ref.name}</h3>
                    <p>{ref.company}</p>
                    <p>{ref.message}</p>

                    <Link to={`/references/edit/${ref.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(ref.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default References;