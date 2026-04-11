import { useEffect, useState } from "react";
import { getOne, update } from "../../datasource/api-users";
import { useNavigate, useParams } from "react-router-dom";
import FormUser from "./FormUser";

function EditUser() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getOne(id).then(res => {
            if (res.success) setUser(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        update(user, id).then(res => {
            if (res.success) navigate("/users/list");
        });
    };

    return (
        <>
            <h1>Edit User</h1>
            <FormUser
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default EditUser;