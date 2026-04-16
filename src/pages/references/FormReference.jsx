function FormReference({ reference, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Name"
                value={reference.name}
                onChange={handleChange}
                required
            />

            <input
                name="company"
                placeholder="Company"
                value={reference.company}
                onChange={handleChange}
            />

            <textarea
                name="message"
                placeholder="Message"
                value={reference.message}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormReference;