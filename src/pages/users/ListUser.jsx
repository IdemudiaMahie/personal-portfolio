import { useEffect, useState } from "react";
import { list, remove } from "../../datasource/api-users";
import { Link } from "react-router-dom";

function ListUser() {
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        list().then(res => {
            if (res.success) setUsers(res.data);
        });
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Delete this user?")) {
            remove(id).then(() => loadUsers());
        }
    };

    return (
        <>
            <h1>Users</h1>

            {users.map(user => (
                <div key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email}</p>

                    <Link to={`/users/edit/${user.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default ListUser;