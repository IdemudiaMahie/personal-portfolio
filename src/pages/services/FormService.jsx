function FormService({ service, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Title"
                value={service.title}
                onChange={handleChange}
                required
            />

            <textarea
                name="description"
                placeholder="Description"
                value={service.description}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormService;