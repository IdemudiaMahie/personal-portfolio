let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/projects/";

export const list = async () => {
    const res = await fetch(apiURL + endpoint);
    return await res.json();
};

export const create = async (project) => {
    const res = await fetch(apiURL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return await res.json();
};

export const update = async (project, id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return await res.json();
};

export const remove = async (id) => {
    const res = await fetch(apiURL + endpoint + id, {
        method: "DELETE",
    });
    return await res.json();
};

export const getOne = async (id) => {
    const res = await fetch(apiURL + endpoint + id);
    return await res.json();
};