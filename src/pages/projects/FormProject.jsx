function FormProject({ project, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Title"
                value={project.title}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="completion"
                value={project.completion}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={project.description}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormProject;