function FormUser({ user, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
                required
            />

            <input
                name="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={handleChange}
            />

            <input
                name="username"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
            />

            <button type="submit">Update</button>
        </form>
    );
}

export default FormUser;